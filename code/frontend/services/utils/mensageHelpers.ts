import { toast } from "sonner"

export function showSuccessMessage(message: string) {
  return toast.success(`Sucesso! ${message}`)
}

export function showErrorMessage(message: string) {
  return toast.error(`Ocorreu um erro: ${message}`)
}