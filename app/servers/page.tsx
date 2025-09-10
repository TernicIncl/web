import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Cpu, HardDrive, Zap, Shield, Gauge } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ServersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom <span className="text-primary">Server Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our custom-built servers are engineered for maximum performance, reliability, and efficiency. Each system
              is tailored to meet specific computational demands.
            </p>
          </div>

          {/* Server Models */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:scale-105 transition-all duration-300 animate-float">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Server className="h-12 w-12 text-primary" />
                  <Badge variant="secondary">Enterprise</Badge>
                </div>
                <CardTitle className="text-2xl">Ternic X1</CardTitle>
                <CardDescription>High-density compute server for data centers and cloud infrastructure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">CPU Cores</span>
                    <span className="font-medium">128 Cores</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Memory</span>
                    <span className="font-medium">2TB DDR5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Storage</span>
                    <span className="font-medium">100TB NVMe</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Power</span>
                    <span className="font-medium">800W TDP</span>
                  </div>
                </div>
                <Button className="w-full animate-pulse-glow">Configure X1</Button>
              </CardContent>
            </Card>

            <Card
              className="group hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Cpu className="h-12 w-12 text-primary" />
                  <Badge variant="secondary">Performance</Badge>
                </div>
                <CardTitle className="text-2xl">Ternic R5</CardTitle>
                <CardDescription>
                  Specialized compute server for AI/ML workloads and scientific computing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">CPU Cores</span>
                    <span className="font-medium">256 Cores</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Memory</span>
                    <span className="font-medium">4TB HBM3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Accelerators</span>
                    <span className="font-medium">8x Custom AI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Power</span>
                    <span className="font-medium">1200W TDP</span>
                  </div>
                </div>
                <Button className="w-full animate-pulse-glow">Configure R5</Button>
              </CardContent>
            </Card>

            <Card
              className="group hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <HardDrive className="h-12 w-12 text-primary" />
                  <Badge variant="secondary">Edge</Badge>
                </div>
                <CardTitle className="text-2xl">Ternic E3</CardTitle>
                <CardDescription>Compact edge computing server for IoT and distributed applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">CPU Cores</span>
                    <span className="font-medium">32 Cores</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Memory</span>
                    <span className="font-medium">512GB DDR5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Storage</span>
                    <span className="font-medium">10TB NVMe</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Power</span>
                    <span className="font-medium">200W TDP</span>
                  </div>
                </div>
                <Button className="w-full animate-pulse-glow">Configure E3</Button>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center animate-fade-in">
              <CardContent className="p-8">
                <Zap className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-bold mb-2">Ultra Performance</h3>
                <p className="text-muted-foreground">
                  Custom silicon optimized for specific workloads delivers unprecedented performance per watt
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Hardware-level security features including secure boot, encrypted memory, and TPM integration
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-8">
                <Gauge className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
                <p className="text-muted-foreground">
                  Advanced telemetry and monitoring capabilities for optimal system management and maintenance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
