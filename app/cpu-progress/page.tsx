import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Cpu, Zap, Target, Beaker } from "lucide-react"

export default function CpuProgressPage() {
  const milestones = [
    { name: "Architecture Design", progress: 0, status: "active", date: "Q2 2025" },
    { name: "ISA Specification", progress: 0, status: "upcoming", date: "Q4 2025" },
    { name: "RTL Implementation", progress: 0, status: "upcoming", date: "Q4 2027" },
    { name: "Verification & Testing", progress: 0, status: "upcoming", date: "Q4 2028" },
    { name: "Physical Design", progress: 0, status: "upcoming", date: "Q2 2029" },
    { name: "Tape-out", progress: 0, status: "upcoming", date: "Q3 2030" },
  ]

  const features = [
    { name: "64-bit RISC Architecture", status: "upcoming" },
    { name: "Out-of-Order Execution", status: "upcoming" },
    { name: "Advanced Branch Prediction", status: "upcoming" },
    { name: "Multi-level Cache Hierarchy", status: "upcoming" },
    { name: "Vector Processing Units", status: "upcoming" },
    { name: "Hardware Security Module", status: "upcoming" },
    { name: "AI Acceleration Units", status: "upcoming" },
    { name: "Power Management", status: "upcoming" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CPU Development <span className="text-primary">Progress</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Track the development of our revolutionary CPU architecture from concept to silicon. Real-time updates on
              our engineering milestones and technical achievements.
            </p>
          </div>

          {/* Overall Progress */}
          <Card className="mb-12 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-6 w-6 text-primary" />
                Overall Project Progress
              </CardTitle>
              <CardDescription>Current development status across all major milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">0% Complete</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <Progress value={0} className="h-3 animate-pulse-glow" />
                <p className="text-sm text-muted-foreground">
                  Expected completion: Q2 2025 • 4 of 6 major milestones completed or in progress
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Milestones */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">Development Milestones</h2>
            <div className="grid gap-6">
              {milestones.map((milestone, index) => (
                <Card
                  key={milestone.name}
                  className={`animate-slide-up ${milestone.status === "active" ? "ring-2 ring-primary/50" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {milestone.status === "complete" && <CheckCircle className="h-6 w-6 text-green-500" />}
                        {milestone.status === "active" && <Clock className="h-6 w-6 text-primary animate-pulse" />}
                        {milestone.status === "upcoming" && <Target className="h-6 w-6 text-muted-foreground" />}
                        <h3 className="text-xl font-semibold">{milestone.name}</h3>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            milestone.status === "complete"
                              ? "default"
                              : milestone.status === "active"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {milestone.date}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="font-medium">{milestone.progress}%</span>
                      </div>
                      <Progress value={milestone.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Status */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Beaker className="h-6 w-6 text-primary" />
                  Feature Implementation
                </CardTitle>
                <CardDescription>Status of key CPU features and capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={feature.name} className="flex items-center justify-between">
                      <span className="text-sm">{feature.name}</span>
                      <Badge
                        variant={
                          feature.status === "complete"
                            ? "default"
                            : feature.status === "active"
                              ? "secondary"
                              : "outline"
                        }
                        className={feature.status === "active" ? "animate-pulse" : ""}
                      >
                        {feature.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Performance Targets
                </CardTitle>
                <CardDescription>Expected performance metrics for the final CPU</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Clock Speed</span>
                      <span className="font-medium">5.2 GHz</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">IPC (Instructions per Clock)</span>
                      <span className="font-medium">6.8</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Power Efficiency</span>
                      <span className="font-medium">150W TDP</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Cache Performance</span>
                      <span className="font-medium">95% Hit Rate</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
