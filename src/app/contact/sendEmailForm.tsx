"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, User, MessageSquare, Loader2 } from "lucide-react";

const initialFormData = () => {
  return {  
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};

export const SendEmailForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to your email service
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating API call
      
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entrarei em contato em breve.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: unknown) {
      console.error('Error sending message:', error);
      toast.error("Erro ao enviar mensagem", {
        description: "Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4" />
                Nome
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/30 border-primary/20 focus:border-primary h-12 placeholder:text-gray-600"
                minLength={3}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/30 border-primary/20 focus:border-primary h-12 placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Assunto
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Assunto da sua mensagem"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-white/30 border-primary/20 focus:border-primary h-12 placeholder:text-gray-600"
              minLength={5}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mensagem
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem aqui..."
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white/30 border-primary/20 focus:border-primary min-h-[150px] resize-none placeholder:text-gray-600"
              rows={6}
              minLength={10}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full md:w-auto px-8 h-12 bg-primary text-white hover:bg-primary/90 transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Enviar Email
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default SendEmailForm;
