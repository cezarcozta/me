import { z } from "zod";

export const sendEmailSchema = z.object({
    name: z
      .string()
      .nonempty({ message: "O nome é obrigatório." })
      .min(3, { message: "O nome precisa ter pelo menos 3 caracteres." })
      .max(50, { message: "O nome não pode passar de 50 caracteres." })
      .trim(),
  
    email: z
      .string()
      .nonempty({ message: "O e-mail é obrigatório." })
      .email({ message: "Endereço de e-mail inválido." })
      .max(100, { message: "Esse e-mail é grande demais." }),
  
    subject: z
      .string()
      .nonempty({ message: "O assunto é obrigatório." })
      .min(5, { message: "O assunto precisa ter no mínimo 5 caracteres." })
      .max(100, { message: "O assunto está muito longo." })
      .trim(),
  
    message: z
      .string()
      .nonempty({ message: "A mensagem é obrigatória." })
      .min(10, { message: "A mensagem precisa ter pelo menos 10 caracteres." })
      .max(1000, { message: "A mensagem está longa demais (máximo de 1000 caracteres)." })
      .trim(),
  })
  