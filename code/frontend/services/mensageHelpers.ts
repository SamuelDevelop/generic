import { toast } from "sonner"

export function success(message: string) {
  return toast.success(`Sucesso! ${message}`)
}

export function error(message: string) {
  return toast.error(`Ocorreu um erro: ${message}`)
}