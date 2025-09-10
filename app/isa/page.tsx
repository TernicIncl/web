import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Layers, Zap, Shield } from "lucide-react"

export default function IsaPage() {
  const instructionTypes = [
    { category: "Arithmetic", count: 32, examples: ["ADD", "SUB", "MUL", "DIV"] },
    { category: "Logic", count: 16, examples: ["AND", "OR", "XOR", "NOT"] },
    { category: "Memory", count: 24, examples: ["LOAD", "STORE", "PREFETCH", "FENCE"] },
    { category: "Control", count: 18, examples: ["BRANCH", "JUMP", "CALL", "RET"] },
    { category: "Vector", count: 28, examples: ["VADD", "VMUL", "VDOT", "VFMA"] },
    { category: "Security", count: 12, examples: ["ENCRYPT", "DECRYPT", "HASH", "VERIFY"] },
  ]

  const registers = [
    { type: "General Purpose", count: 32, width: "64-bit", description: "Standard integer operations" },
    { type: "Vector", count: 32, width: "512-bit", description: "SIMD and vector operations" },
    { type: "Control", count: 16, width: "64-bit", description: "System control and status" },
    { type: "Security", count: 8, width: "256-bit", description: "Cryptographic operations" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ternic <span className="text-primary">ISA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our custom Instruction Set Architecture (ISA) is designed for maximum performance, security, and
              efficiency across diverse computing workloads.
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center animate-float">
              <CardContent className="p-8">
                <Code className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold mb-2">130+</h3>
                <p className="text-muted-foreground">Total Instructions</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-float" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <Layers className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold mb-2">64-bit</h3>
                <p className="text-muted-foreground">Native Architecture</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-float" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-8">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold mb-2">Hardware</h3>
                <p className="text-muted-foreground">Security Features</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Tabs */}
          <Tabs defaultValue="instructions" className="animate-fade-in">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="registers">Registers</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>

            <TabsContent value="instructions" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instructionTypes.map((type, index) => (
                  <Card
                    key={type.category}
                    className="animate-slide-up hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {type.category}
                        <Badge variant="secondary">{type.count}</Badge>
                      </CardTitle>
                      <CardDescription>Core {type.category.toLowerCase()} operations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground mb-3">Examples:</p>
                        <div className="flex flex-wrap gap-2">
                          {type.examples.map((example) => (
                            <Badge key={example} variant="outline" className="font-mono">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="registers" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {registers.map((reg, index) => (
                  <Card key={reg.type} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {reg.type} Registers
                        <Badge variant="secondary">
                          {reg.count}x {reg.width}
                        </Badge>
                      </CardTitle>
                      <CardDescription>{reg.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Count</span>
                          <span className="font-medium">{reg.count}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Width</span>
                          <span className="font-medium">{reg.width}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Total Bits</span>
                          <span className="font-medium">{reg.count * Number.parseInt(reg.width)} bits</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="animate-slide-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-6 w-6 text-primary" />
                      Performance Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Out-of-Order Execution</span>
                        <Badge>Implemented</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Superscalar Design</span>
                        <Badge>8-way</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Branch Prediction</span>
                        <Badge>Advanced</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Vector Extensions</span>
                        <Badge>512-bit</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-primary" />
                      Security Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Memory Protection</span>
                        <Badge>Hardware</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Secure Boot</span>
                        <Badge>Built-in</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Encryption Engine</span>
                        <Badge>AES-256</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Trusted Execution</span>
                        <Badge>TEE Support</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="examples" className="mt-8">
              <div className="space-y-6">
                <Card className="animate-slide-up">
                  <CardHeader>
                    <CardTitle>Assembly Code Examples</CardTitle>
                    <CardDescription>Sample code demonstrating Ternic ISA syntax and capabilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Basic Arithmetic</h4>
                        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                          <div>ADD R1, R2, R3 ; R1 = R2 + R3</div>
                          <div>MUL R4, R1, #8 ; R4 = R1 * 8</div>
                          <div>SUB R5, R4, R2 ; R5 = R4 - R2</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Vector Operations</h4>
                        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                          <div>VLOAD V1, [R10] ; Load vector from memory</div>
                          <div>VLOAD V2, [R11] ; Load second vector</div>
                          <div>VADD V3, V1, V2 ; Vector addition</div>
                          <div>VSTORE [R12], V3 ; Store result</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Security Operations</h4>
                        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                          <div>ENCRYPT R1, R2, K1 ; Encrypt R2 with key K1</div>
                          <div>HASH R3, [R4], #32 ; Hash 32 bytes from R4</div>
                          <div>VERIFY R5, R3, SIG ; Verify signature</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
