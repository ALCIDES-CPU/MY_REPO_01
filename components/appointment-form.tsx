"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Upload, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function AppointmentForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [date, setDate] = useState<Date>()

  // Form state
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nomeCompleto: "",
    dataNascimento: "",
    tipoDocumento: "",
    numeroDocumento: "",
    email: "",
    telefone: "",
    paisResidencia: "",

    // Tipo de Serviço
    tipoServico: "",
    outrosDetalhes: "",

    // Localização e Horário
    pais: "",
    cidade: "",
    centroAIMA: "",
    horaDesejada: "",

    // Documentos (file names/references)
    documentoIdentificacao: null as File | null,
    comprovanteResidencia: null as File | null,
    vistoAutorizacao: null as File | null,
    nifNiss: null as File | null,
    outrosDocumentos: null as File | null,
  })

  const handleFileChange = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }))
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here we would normally send data to API
    // For now, we'll simulate a delay and move to payment
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    // Redirect to payment would happen here
    window.location.href = "/pagamento"
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Passo {step} de 4</span>
          <span className="text-sm text-muted-foreground">{Math.round((step / 4) * 100)}% completo</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Dados Pessoais */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Dados Pessoais</CardTitle>
            <CardDescription>Forneça as suas informações pessoais</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nomeCompleto">
                  Nome Completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nomeCompleto"
                  required
                  value={formData.nomeCompleto}
                  onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataNascimento">
                  Data de Nascimento <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="dataNascimento"
                  type="date"
                  required
                  value={formData.dataNascimento}
                  onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipoDocumento">
                  Tipo de Documento <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.tipoDocumento}
                  onValueChange={(value) => setFormData({ ...formData, tipoDocumento: value })}
                >
                  <SelectTrigger id="tipoDocumento">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="passaporte">Passaporte</SelectItem>
                    <SelectItem value="cartao-cidadao">Cartão de Cidadão</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="numeroDocumento">
                  Número do Documento <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="numeroDocumento"
                  required
                  value={formData.numeroDocumento}
                  onChange={(e) => setFormData({ ...formData, numeroDocumento: e.target.value })}
                  placeholder="Número do documento"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  E-mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">
                  Telemóvel <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  placeholder="+351 912 345 678"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="paisResidencia">
                País de Residência <span className="text-destructive">*</span>
              </Label>
              <Input
                id="paisResidencia"
                required
                value={formData.paisResidencia}
                onChange={(e) => setFormData({ ...formData, paisResidencia: e.target.value })}
                placeholder="Portugal"
              />
            </div>

            <div className="flex justify-end">
              <Button type="button" onClick={handleNext}>
                Próximo
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Tipo de Serviço */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Tipo de Serviço</CardTitle>
            <CardDescription>Selecione o serviço que necessita</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tipoServico">
                Serviço <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.tipoServico}
                onValueChange={(value) => setFormData({ ...formData, tipoServico: value })}
              >
                <SelectTrigger id="tipoServico">
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agendamento-geral">Agendamento Geral AIMA</SelectItem>
                  <SelectItem value="renovacao-autorizacao">Renovação de Autorização de Residência</SelectItem>
                  <SelectItem value="primeira-autorizacao">Primeira Autorização de Residência</SelectItem>
                  <SelectItem value="reagrupamento-familiar">Reagrupamento Familiar</SelectItem>
                  <SelectItem value="informacao-consulta">Informação / Consulta</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.tipoServico === "outros" && (
              <div className="space-y-2">
                <Label htmlFor="outrosDetalhes">Descreva o Serviço</Label>
                <Textarea
                  id="outrosDetalhes"
                  value={formData.outrosDetalhes}
                  onChange={(e) => setFormData({ ...formData, outrosDetalhes: e.target.value })}
                  placeholder="Descreva o serviço que necessita..."
                  rows={4}
                />
              </div>
            )}

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleBack}>
                Voltar
              </Button>
              <Button type="button" onClick={handleNext}>
                Próximo
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Localização e Horário */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Localização e Horário</CardTitle>
            <CardDescription>Escolha o local e horário do atendimento</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pais">
                  País <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.pais} onValueChange={(value) => setFormData({ ...formData, pais: value })}>
                  <SelectTrigger id="pais">
                    <SelectValue placeholder="Selecione o país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portugal">Portugal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cidade">
                  Cidade <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.cidade} onValueChange={(value) => setFormData({ ...formData, cidade: value })}>
                  <SelectTrigger id="cidade">
                    <SelectValue placeholder="Selecione a cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lisboa">Lisboa</SelectItem>
                    <SelectItem value="porto">Porto</SelectItem>
                    <SelectItem value="coimbra">Coimbra</SelectItem>
                    <SelectItem value="braga">Braga</SelectItem>
                    <SelectItem value="faro">Faro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="centroAIMA">
                Centro AIMA <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.centroAIMA}
                onValueChange={(value) => setFormData({ ...formData, centroAIMA: value })}
              >
                <SelectTrigger id="centroAIMA">
                  <SelectValue placeholder="Selecione o centro" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lisboa-centro">Lisboa Centro</SelectItem>
                  <SelectItem value="lisboa-norte">Lisboa Norte</SelectItem>
                  <SelectItem value="porto-centro">Porto Centro</SelectItem>
                  <SelectItem value="coimbra-centro">Coimbra Centro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>
                  Data Desejada <span className="text-destructive">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: ptBR }) : "Selecione a data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="horaDesejada">
                  Hora Desejada <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.horaDesejada}
                  onValueChange={(value) => setFormData({ ...formData, horaDesejada: value })}
                >
                  <SelectTrigger id="horaDesejada">
                    <SelectValue placeholder="Selecione a hora" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00</SelectItem>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                    <SelectItem value="14:00">14:00</SelectItem>
                    <SelectItem value="15:00">15:00</SelectItem>
                    <SelectItem value="16:00">16:00</SelectItem>
                    <SelectItem value="17:00">17:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleBack}>
                Voltar
              </Button>
              <Button type="button" onClick={handleNext}>
                Próximo
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Upload de Documentos */}
      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Documentos Necessários</CardTitle>
            <CardDescription>Formatos aceites: PDF, JPG, PNG (máximo 5 MB por ficheiro)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="documentoIdentificacao">
                Documento de Identificação (frente e verso) <span className="text-destructive">*</span>
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="documentoIdentificacao"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange("documentoIdentificacao", e.target.files?.[0] || null)}
                  className="cursor-pointer"
                />
                <Upload className="h-5 w-5 text-muted-foreground" />
              </div>
              {formData.documentoIdentificacao && (
                <p className="text-sm text-muted-foreground">
                  Ficheiro selecionado: {formData.documentoIdentificacao.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="comprovanteResidencia">Comprovante de Residência</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="comprovanteResidencia"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange("comprovanteResidencia", e.target.files?.[0] || null)}
                  className="cursor-pointer"
                />
                <Upload className="h-5 w-5 text-muted-foreground" />
              </div>
              {formData.comprovanteResidencia && (
                <p className="text-sm text-muted-foreground">
                  Ficheiro selecionado: {formData.comprovanteResidencia.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="vistoAutorizacao">Visto/Autorização Anterior</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="vistoAutorizacao"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange("vistoAutorizacao", e.target.files?.[0] || null)}
                  className="cursor-pointer"
                />
                <Upload className="h-5 w-5 text-muted-foreground" />
              </div>
              {formData.vistoAutorizacao && (
                <p className="text-sm text-muted-foreground">Ficheiro selecionado: {formData.vistoAutorizacao.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="nifNiss">NIF/NISS (quando aplicável)</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="nifNiss"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange("nifNiss", e.target.files?.[0] || null)}
                  className="cursor-pointer"
                />
                <Upload className="h-5 w-5 text-muted-foreground" />
              </div>
              {formData.nifNiss && (
                <p className="text-sm text-muted-foreground">Ficheiro selecionado: {formData.nifNiss.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="outrosDocumentos">Outros Documentos</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="outrosDocumentos"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange("outrosDocumentos", e.target.files?.[0] || null)}
                  className="cursor-pointer"
                />
                <Upload className="h-5 w-5 text-muted-foreground" />
              </div>
              {formData.outrosDocumentos && (
                <p className="text-sm text-muted-foreground">Ficheiro selecionado: {formData.outrosDocumentos.name}</p>
              )}
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Nota:</strong> Certifique-se de que todos os documentos estão legíveis e dentro do tamanho
                máximo permitido. Os documentos serão revisados antes da confirmação do agendamento.
              </p>
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleBack}>
                Voltar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />A processar...
                  </>
                ) : (
                  "Continuar para Pagamento"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </form>
  )
}
