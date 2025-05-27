"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, User, MessageSquare, Loader2 } from "lucide-react";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { z } from "zod";

const sendEmailSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const initialFormData = () => {
  return {  
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};

export const SendEmailForm = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

 const validateForm = () => {
  try {
    sendEmailSchema.safeParse(formData)
    setErrors(initialFormData)
    return true
  } catch (err) {
    if(err instanceof z.ZodError) {
      const error = err as z.ZodError
      const newErrors = initialFormData();
      error.errors.forEach((err) => {
        const field = err.path[0];
        if(field === 'name') {
          newErrors[field] = error.message
        } 
        if(field === 'email') {
          newErrors[field] = error.message
        } 
        if(field === 'subject') {
          newErrors[field] = error.message
        } 
        if(field === 'message') {
          newErrors[field] = error.message
        }
      })
      setErrors(newErrors)
    }
    return false
  }
 }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpa o erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {


    try {
      e.preventDefault();

      const isValid = validateForm();
      
      if(!isValid) {
        toast.error('Formulário inválido');
      };

      setIsSubmitting(true);
      
      const response = await fetch('/api/send',{ method: 'POST', body: JSON.stringify(formData) });
      
      if (response.ok) {
        toast.success('Email enviado com sucesso');
        setFormData(initialFormData);
        setErrors({});
        return;
      }  
      toast.error(`${response.statusText}`);
    } catch (error: unknown) {
      const err = error as Error;
      toast.error(`${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-sm"
      role="form"
      aria-label={t('contact.form.title')}
    >
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label 
                htmlFor="name" 
                className="text-sm font-medium flex items-center gap-2"
              >
                <User className="w-4 h-4" aria-hidden="true" />
                {t('contact.form.name')}
                <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                placeholder={t('contact.form.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="bg-white/30 border-primary/20 focus:border-primary h-12 placeholder:text-gray-600"
                minLength={3}
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="text-sm font-medium flex items-center gap-2"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {t('contact.form.email')}
                <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('contact.form.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="bg-white/30 border-primary/20 focus:border-primary h-12 placeholder:text-gray-600"
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="subject" 
              className="text-sm font-medium flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              {t('contact.form.subject')}
              <span className="text-red-500">*</span>
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder={t('contact.form.subjectPlaceholder')}
              value={formData.subject}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className="bg-white/30 border-primary/20 focus:border-primary h-12 placeholder:text-gray-600"
              minLength={5}
            />
            {errors.subject && (
              <p id="subject-error" className="text-red-500 text-sm" role="alert">
                {errors.subject}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="message" 
              className="text-sm font-medium flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              {t('contact.form.message')}
              <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder={t('contact.form.messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="bg-white/30 border-primary/20 focus:border-primary min-h-[120px] placeholder:text-gray-600"
              minLength={10}
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm" role="alert">
                {errors.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 text-base font-medium"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t('contact.form.sending')}
            </>
          ) : (
            t('contact.form.send')
          )}
        </Button>
      </form>
    </div>
  );
};

export default SendEmailForm;
