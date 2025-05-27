"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, User, MessageSquare, Loader2 } from "lucide-react";
import { useTranslation } from "@/lib/hooks/useTranslation";

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

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 3 ? t('contact.form.errors.nameMin') : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? t('contact.form.errors.emailInvalid') : '';
      case 'subject':
        return value.length < 5 ? t('contact.form.errors.subjectMin') : '';
      case 'message':
        return value.length < 10 ? t('contact.form.errors.messageMin') : '';
      default:
        return '';
    }
  };

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

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Valida todos os campos antes de enviar
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to your email service
      const response = await fetch('/api/send',{method: 'POST', body: JSON.stringify(formData)}); // Simulating API call
      if (response.ok) {
        toast.success(t('contact.form.success.title'), {
          description: t('contact.form.success.description'),
        });
        setFormData(initialFormData);
        setErrors({});
      }  
      toast.error(t('contact.form.error.title'), {
        description: t('contact.form.error.description'),
      });
    } catch (error: unknown) {
      console.error('Error sending message:', error);
      toast.error(t('contact.form.error.title'), {
        description: t('contact.form.error.description'),
      });
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
