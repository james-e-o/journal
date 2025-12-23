import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const ProfessionalSetup = () => {
    // Risk & Capital Discipline
    const [maxDrawdownDaily, setMaxDrawdownDaily] = useState("")
    const [maxDrawdownWeekly, setMaxDrawdownWeekly] = useState("")
    const [maxDrawdownOverall, setMaxDrawdownOverall] = useState("")
    const [maxTradesPerDay, setMaxTradesPerDay] = useState("")
    const [maxRiskPerTrade, setMaxRiskPerTrade] = useState("")
    const [maxExposurePerAsset, setMaxExposurePerAsset] = useState("")
    const [tradingTimeWindow, setTradingTimeWindow] = useState("")

    // Accountability Partners
    const [accountabilityPartners, setAccountabilityPartners] = useState([])
    const [partnerSearch, setPartnerSearch] = useState("")

    // Trading Rules Engine
    const [allowedSetups, setAllowedSetups] = useState("")
    const [forbiddenBehaviors, setForbiddenBehaviors] = useState("")
    const [requiredConfirmations, setRequiredConfirmations] = useState("")

    // Psychological & Behavioral Tracking
    const [moodPreTrade, setMoodPreTrade] = useState("")
    const [moodPostTrade, setMoodPostTrade] = useState("")
    const [sleepQuality, setSleepQuality] = useState("")
    const [stressLevel, setStressLevel] = useState("")

    // Performance Metrics
    const [expectancy, setExpectancy] = useState("")
    const [profitFactor, setProfitFactor] = useState("")
    const [averageRR, setAverageRR] = useState("")
    const [maxConsecutiveLosses, setMaxConsecutiveLosses] = useState("")

    // Trade Review & Post-Mortem
    const [postTradeReview, setPostTradeReview] = useState("")
    const [weeklyReview, setWeeklyReview] = useState("")
    const [monthlyReview, setMonthlyReview] = useState("")

    // Risk Governance & Safeguards
    const [coolDownMode, setCoolDownMode] = useState(false)
    const [overconfidenceDetection, setOverconfidenceDetection] = useState(false)
    const [tiltWarnings, setTiltWarnings] = useState(false)
    const [newsFilter, setNewsFilter] = useState(false)

    // Capital & Account Management
    const [multipleAccounts, setMultipleAccounts] = useState("")
    const [scalingPlans, setScalingPlans] = useState("")
    const [withdrawalTracking, setWithdrawalTracking] = useState("")
    const [equityCurveAnnotations, setEquityCurveAnnotations] = useState("")

    // Professional Identity & Standards
    const [tradingStyle, setTradingStyle] = useState("")
    const [marketsTraded, setMarketsTraded] = useState("")
    const [strategyCount, setStrategyCount] = useState("")
    const [riskModelType, setRiskModelType] = useState("")
    const [experienceLevel, setExperienceLevel] = useState("")
    const [tradingManifesto, setTradingManifesto] = useState("")

    // Professional Mode
    const [professionalMode, setProfessionalMode] = useState(false)

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-2">
                <Checkbox id="professional-mode" checked={professionalMode} onCheckedChange={setProfessionalMode} />
                <Label htmlFor="professional-mode" className="font-semibold">Enable Professional Mode</Label>
            </div>
            {professionalMode && (
                <Tabs defaultValue="risk-limits" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="risk-limits">Risk Limits</TabsTrigger>
                        <TabsTrigger value="trading-rules">Trading Rules</TabsTrigger>
                        <TabsTrigger value="psychology">Psychology</TabsTrigger>
                        <TabsTrigger value="accountability">Accountability</TabsTrigger>
                    </TabsList>
                    <TabsContent value="risk-limits" className="space-y-4">
                        <h3 className="text-lg font-semibold">Risk & Capital Discipline</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>Max Drawdown Daily</Label>
                                <Input value={maxDrawdownDaily} onChange={(e) => setMaxDrawdownDaily(e.target.value)} />
                            </div>
                            <div>
                                <Label>Max Drawdown Weekly</Label>
                                <Input value={maxDrawdownWeekly} onChange={(e) => setMaxDrawdownWeekly(e.target.value)} />
                            </div>
                            <div>
                                <Label>Max Drawdown Overall</Label>
                                <Input value={maxDrawdownOverall} onChange={(e) => setMaxDrawdownOverall(e.target.value)} />
                            </div>
                            <div>
                                <Label>Max Trades Per Day</Label>
                                <Input value={maxTradesPerDay} onChange={(e) => setMaxTradesPerDay(e.target.value)} />
                            </div>
                            <div>
                                <Label>Max Risk Per Trade</Label>
                                <Input value={maxRiskPerTrade} onChange={(e) => setMaxRiskPerTrade(e.target.value)} />
                            </div>
                            <div>
                                <Label>Max Exposure Per Asset</Label>
                                <Input value={maxExposurePerAsset} onChange={(e) => setMaxExposurePerAsset(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <Label>Trading Time Window</Label>
                            <Input value={tradingTimeWindow} onChange={(e) => setTradingTimeWindow(e.target.value)} />
                        </div>
                    </TabsContent>
                    <TabsContent value="trading-rules" className="space-y-4">
                        <h3 className="text-lg font-semibold">Trading Rules Engine</h3>
                        <div>
                            <Label>Allowed Setups</Label>
                            <Textarea value={allowedSetups} onChange={(e) => setAllowedSetups(e.target.value)} />
                        </div>
                        <div>
                            <Label>Forbidden Behaviors</Label>
                            <Textarea value={forbiddenBehaviors} onChange={(e) => setForbiddenBehaviors(e.target.value)} />
                        </div>
                        <div>
                            <Label>Required Confirmations</Label>
                            <Textarea value={requiredConfirmations} onChange={(e) => setRequiredConfirmations(e.target.value)} />
                        </div>
                    </TabsContent>
                    <TabsContent value="psychology" className="space-y-4">
                        <h3 className="text-lg font-semibold">Psychological & Behavioral Tracking</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>Mood Pre-Trade</Label>
                                <Select value={moodPreTrade} onValueChange={setMoodPreTrade}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select mood" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="calm">Calm</SelectItem>
                                        <SelectItem value="anxious">Anxious</SelectItem>
                                        <SelectItem value="confident">Confident</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Mood Post-Trade</Label>
                                <Select value={moodPostTrade} onValueChange={setMoodPostTrade}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select mood" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="calm">Calm</SelectItem>
                                        <SelectItem value="anxious">Anxious</SelectItem>
                                        <SelectItem value="confident">Confident</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Sleep Quality</Label>
                                <Select value={sleepQuality} onValueChange={setSleepQuality}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select quality" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="poor">Poor</SelectItem>
                                        <SelectItem value="average">Average</SelectItem>
                                        <SelectItem value="good">Good</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Stress Level</Label>
                                <Select value={stressLevel} onValueChange={setStressLevel}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="low">Low</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="high">High</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="accountability" className="space-y-4">
                        <h3 className="text-lg font-semibold">Accountability Partners</h3>
                        <div>
                            <Label>Search Partners</Label>
                            <Input value={partnerSearch} onChange={(e) => setPartnerSearch(e.target.value)} placeholder="User ID, Username, or Email" />
                        </div>
                        <div className="space-y-2">
                            <Label>Current Partners</Label>
                            {/* Placeholder for partner list */}
                            <p className="text-sm text-gray-500">No partners added yet.</p>
                        </div>
                    </TabsContent>
                </Tabs>
            )}
        </div>
    )
}

export default ProfessionalSetup