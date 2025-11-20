/**
 * Thought Architecture Demo
 *
 * Interactive comparison of Transactional AI vs Thought Architecture™
 * Educational walkthrough showing the difference between generic AI usage
 * and strategic AI partnership with business context
 */

import React, { useState } from 'react';
import { RotateCcw, Zap, Users, FileText, Database, Building2, TrendingUp } from 'lucide-react';
import './ThoughtArchitectureDemo.css';

interface TransactionalStep {
  label: string;
  userPrompt: string;
  aiThinking: string;
  aiOutput: string;
  problem: string;
}

interface ContextItem {
  icon?: any;
  logo?: string;
  label: string;
  detail: string;
}

interface ThoughtArchStep {
  phase: string;
  label: string;
  detail: string;
  contextAdded?: ContextItem[];
  aiRole?: string;
  humanRole?: string;
  aiAnalysis?: string;
  humanRefinement?: string;
  finalOutput?: string;
  memory?: string;
  output: string;
}

const ThoughtArchitectureDemo: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<'transactional' | 'thoughtarch' | null>(null);
  const [step, setStep] = useState(0);

  const transactionalSteps: TransactionalStep[] = [
    {
      label: "You ask AI for help",
      userPrompt: "Create a customer success strategy for my manufacturing company",
      aiThinking: "Accessing general knowledge base...",
      aiOutput: "Here's a generic customer success strategy:\n\n1. Onboard new customers effectively\n2. Track key metrics and KPIs\n3. Send regular satisfaction surveys\n4. Provide excellent support\n5. Build long-term relationships",
      problem: "This is generic advice. It doesn't know anything about YOUR company, YOUR customers, or YOUR industry constraints."
    },
    {
      label: "You realize it's too generic",
      userPrompt: "No, I need something specific to manufacturing",
      aiThinking: "Searching general manufacturing knowledge...",
      aiOutput: "Here's a manufacturing-focused approach:\n\n1. Focus on equipment uptime\n2. Track production metrics\n3. Ensure quality standards\n4. Maintain supply chain reliability\n5. Provide technical documentation",
      problem: "Still generic. The AI has no memory of your previous question. It's starting from zero again."
    },
    {
      label: "You try to add more context",
      userPrompt: "We're a $50M precision parts manufacturer with 200 customers, average order value $25K, dealing with quality consistency issues",
      aiThinking: "Processing new information...",
      aiOutput: "Based on your description:\n\n1. Implement quality control checkpoints\n2. Develop customer communication protocols\n3. Create escalation procedures\n4. Track defect rates\n5. Build feedback loops",
      problem: "Better, but you had to manually provide all context. And if you start a new conversation tomorrow, you'll have to do it all over again."
    },
    {
      label: "You give up and do it yourself",
      userPrompt: "",
      aiThinking: "",
      aiOutput: "You spend 3 hours manually crafting the strategy using your internal documents, customer data, and industry knowledge.",
      problem: "The AI became more work than it was worth. You're back to doing everything manually."
    }
  ];

  const thoughtArchSteps: ThoughtArchStep[] = [
    {
      phase: "01 — Intention",
      label: "Design the Partnership",
      detail: "You define what AI should handle vs. what requires your expertise",
      contextAdded: [],
      aiRole: "AI will: Analyze customer data patterns, identify trends, draft frameworks",
      humanRole: "You will: Define success criteria, validate strategic fit, add creative positioning",
      output: "Partnership roles are clear. AI handles data processing. You handle strategic judgment."
    },
    {
      phase: "02 — Context",
      label: "Structure the Information",
      detail: "AI receives your specific business context, not just generic knowledge",
      contextAdded: [
        { icon: Building2, label: "Company Profile", detail: "$50M precision parts manufacturer, 200 customers" },
        { icon: FileText, label: "Recent Documents", detail: "Q3 customer feedback report, quality audit findings" },
        { icon: Database, label: "Customer Data", detail: "Order history, defect rates, support tickets" },
        { icon: TrendingUp, label: "Current Challenges", detail: "Quality consistency issues, 15% repeat defect rate" }
      ],
      aiRole: "AI now understands: Your company size, customer base, current challenges, recent performance data",
      humanRole: "You provided: Business constraints, goals, available resources, strategic priorities",
      output: "AI has built a complete picture of YOUR situation. Not generic knowledge—your specific context."
    },
    {
      phase: "03 — Synthesize",
      label: "Combine AI Capability with Human Judgment",
      detail: "AI processes your data and generates insights. You validate and refine.",
      contextAdded: [],
      aiAnalysis: "• Identified pattern: 80% of defects occur in 3 specific product lines\n• Found correlation: Customers with proactive communication have 45% lower churn\n• Generated framework: 4-tier customer success model based on order value and complexity",
      humanRefinement: "You adjusted:\n• Prioritized the 3 high-defect product lines for immediate action\n• Added quarterly business reviews for top 20% of customers\n• Incorporated your team's capacity constraints",
      output: "The strategy combines AI's pattern recognition with your strategic insight and operational reality."
    },
    {
      phase: "04 — Deliver",
      label: "Create Tangible Value",
      detail: "You get a deployment-ready strategy that builds institutional memory",
      finalOutput: "✓ Customer Success Strategy (customized for your business)\n✓ Implementation timeline with your team's capacity\n✓ Success metrics tied to your actual data\n✓ Action items for the 3 high-defect product lines\n✓ Quarterly business review template for top customers",
      memory: "Next time you work with AI:\n• It remembers this context\n• Builds on this foundation\n• Gets better with each interaction\n• Compounds your institutional knowledge",
      output: "95% deployment-ready. Your team can start executing Monday. And the context is saved for next time."
    },
    {
      phase: "05 — Technology",
      label: "How Frontier AI Models Enable This",
      detail: "Leading AI platforms have built features specifically for context awareness and institutional memory",
      contextAdded: [
        { logo: "/assets/Claude_logo.png", label: "Claude Projects", detail: "200K context window, custom instructions, project knowledge base" },
        { logo: "/assets/openAI_logo.png", label: "ChatGPT Projects", detail: "Project-only memory, file uploads, isolated context per workspace" },
        { logo: "/assets/Microsoft_Copilot_Logo.png", label: "Copilot Notebooks", detail: "M365 integration, real-time updates, SharePoint-backed storage" },
        { logo: "/assets/Google_logo.svg.webp", label: "NotebookLM", detail: "50 sources per notebook, citation-backed responses, no hallucinations" }
      ],
      aiRole: "These platforms provide:\n• Persistent context across conversations\n• File and document integration\n• Team collaboration on shared knowledge\n• Memory isolation between projects\n• Automatic context expansion (RAG)",
      humanRole: "You choose the right tool:\n• Claude for long-form analysis and reasoning\n• ChatGPT for conversational workflows\n• Copilot for Microsoft 365 integration\n• NotebookLM for research and citation needs",
      output: "This isn't theoretical. Every major AI platform now supports Thought Architecture workflows."
    }
  ];

  const handleSelectPath = (path: 'transactional' | 'thoughtarch') => {
    setSelectedPath(path);
    setStep(0);
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(0);
  };

  const handleBack = () => {
    setSelectedPath(null);
    setStep(0);
  };

  if (!selectedPath) {
    return (
      <div className="ta-demo-page">
        <div className="ta-demo-container">
          <div className="ta-demo-header">
            <h1 className="ta-demo-main-title">The Two Paths</h1>
            <p className="ta-demo-main-subtitle">Same challenge. Different approaches.</p>
            <p className="ta-demo-scenario">
              Scenario: Create a customer success strategy for a manufacturing company
            </p>
          </div>

          <div className="ta-demo-path-grid">
            {/* Transactional Path Card */}
            <button
              onClick={() => handleSelectPath('transactional')}
              className="ta-path-card ta-path-transactional"
            >
              <div className="ta-path-header">
                <Zap size={48} className="ta-path-icon" />
                <h2 className="ta-path-title">Transactional AI</h2>
                <p className="ta-path-subtitle">One-off requests. Starting from zero each time.</p>
              </div>
              <div className="ta-path-body">
                <div className="ta-path-features">
                  <p>✗ Generic outputs</p>
                  <p>✗ No context retention</p>
                  <p>✗ Manual rework required</p>
                  <p>✗ Starts over every time</p>
                </div>
                <div className="ta-path-cta">
                  See why this doesn't work →
                </div>
              </div>
            </button>

            {/* Thought Architecture Path Card */}
            <button
              onClick={() => handleSelectPath('thoughtarch')}
              className="ta-path-card ta-path-thoughtarch"
            >
              <div className="ta-path-header">
                <Users size={48} className="ta-path-icon" />
                <h2 className="ta-path-title">Thought Architecture™</h2>
                <p className="ta-path-subtitle">Human as Thought Leader. AI as Thought Partner.</p>
              </div>
              <div className="ta-path-body">
                <div className="ta-path-features">
                  <p>✓ Your specific context</p>
                  <p>✓ Your business data</p>
                  <p>✓ Deployment-ready outputs</p>
                  <p>✓ Compounds over time</p>
                </div>
                <div className="ta-path-cta">
                  See how this transforms work →
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedPath === 'transactional') {
    const currentStep = transactionalSteps[step];

    return (
      <div className="ta-demo-page">
        <div className="ta-demo-container">
          <div className="ta-demo-nav-header">
            <button onClick={handleBack} className="ta-back-button">
              ← Back to comparison
            </button>
            <div className="ta-demo-header-row">
              <div className="ta-demo-title-section">
                <div className="ta-demo-title-row">
                  <Zap size={32} className="ta-demo-icon-gray" />
                  <h1 className="ta-demo-page-title">Transactional AI</h1>
                </div>
                <p className="ta-demo-page-subtitle">Watch what happens when you use AI as a simple tool</p>
              </div>
              <div className="ta-demo-controls">
                <button onClick={handleReset} className="ta-btn ta-btn-reset">
                  <RotateCcw size={20} />
                  Reset
                </button>
                {step < 3 && (
                  <button onClick={handleNext} className="ta-btn ta-btn-next-gray">
                    Next Step →
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="ta-step-card ta-step-transactional">
            <div className="ta-step-card-header">
              <h3 className="ta-step-title">
                Step {step + 1}: {currentStep.label}
              </h3>
              <div className="ta-step-time">
                {step * 3} minutes elapsed
              </div>
            </div>

            <div className="ta-step-content">
              {currentStep.userPrompt && (
                <div className="ta-message ta-message-user">
                  <div className="ta-message-label">YOU</div>
                  <div className="ta-message-text">{currentStep.userPrompt}</div>
                </div>
              )}

              {currentStep.aiThinking && (
                <div className="ta-message ta-message-thinking">
                  <div className="ta-message-label">
                    <Zap size={14} />
                    AI THINKING
                  </div>
                  <div className="ta-message-text-thinking">{currentStep.aiThinking}</div>
                </div>
              )}

              <div className="ta-message ta-message-ai-output">
                <div className="ta-message-label">AI OUTPUT</div>
                <div className="ta-message-text ta-message-mono">
                  {currentStep.aiOutput}
                </div>
              </div>

              <div className="ta-message ta-message-problem">
                <div className="ta-message-label">⚠️ THE PROBLEM</div>
                <div className="ta-message-text">{currentStep.problem}</div>
              </div>
            </div>
          </div>

          {step >= 3 && (
            <div className="ta-result-card ta-result-failure">
              <h3 className="ta-result-title">The Result</h3>
              <p className="ta-result-text">
                After 12+ minutes and multiple frustrating iterations, you gave up and did it yourself manually.
              </p>
              <p className="ta-result-conclusion">
                AI as a vending machine: You get what you ask for, but it's never quite right.
              </p>
              <button onClick={handleBack} className="ta-btn ta-btn-try-other">
                Now see the Thought Architecture approach →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (selectedPath === 'thoughtarch') {
    const currentStep = thoughtArchSteps[step];

    return (
      <div className="ta-demo-page">
        <div className="ta-demo-container">
          <div className="ta-demo-nav-header">
            <button onClick={handleBack} className="ta-back-button">
              ← Back to comparison
            </button>
            <div className="ta-demo-header-row">
              <div className="ta-demo-title-section">
                <div className="ta-demo-title-row">
                  <Users size={32} className="ta-demo-icon-red" />
                  <h1 className="ta-demo-page-title">Thought Architecture™</h1>
                </div>
                <p className="ta-demo-page-subtitle">Watch how human expertise + AI capability = transformation</p>
              </div>
              <div className="ta-demo-controls">
                <button onClick={handleReset} className="ta-btn ta-btn-reset">
                  <RotateCcw size={20} />
                  Reset
                </button>
                {step < 4 && (
                  <button onClick={handleNext} className="ta-btn ta-btn-next-red">
                    Next Step →
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="ta-step-card ta-step-thoughtarch">
            <div className="ta-step-card-header-gradient">
              <h3 className="ta-step-phase">{currentStep.phase}</h3>
              <p className="ta-step-label">{currentStep.label}</p>
            </div>

            <div className="ta-step-content">
              <div className="ta-message ta-message-happening">
                <div className="ta-message-label">WHAT'S HAPPENING</div>
                <div className="ta-message-text-large">{currentStep.detail}</div>
              </div>

              {currentStep.contextAdded && currentStep.contextAdded.length > 0 && (
                <div className="ta-context-section">
                  <div className="ta-context-title">
                    Context Added to AI:
                  </div>
                  <div className="ta-context-grid">
                    {currentStep.contextAdded.map((context, idx) => (
                      <div key={idx} className="ta-context-card">
                        <div className="ta-context-card-content">
                          {context.logo ? (
                            <img src={context.logo} alt={context.label} className="ta-context-logo" />
                          ) : (
                            <context.icon className="ta-context-icon" size={20} />
                          )}
                          <div>
                            <div className="ta-context-label">{context.label}</div>
                            <div className="ta-context-detail">{context.detail}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep.aiRole && (
                <div className="ta-message ta-message-ai-role">
                  <div className="ta-message-label">🤖 AI ROLE</div>
                  <div className="ta-message-text">{currentStep.aiRole}</div>
                </div>
              )}

              {currentStep.humanRole && (
                <div className="ta-message ta-message-human-role">
                  <div className="ta-message-label">👤 YOUR ROLE</div>
                  <div className="ta-message-text">{currentStep.humanRole}</div>
                </div>
              )}

              {currentStep.aiAnalysis && (
                <div className="ta-message ta-message-ai-analysis">
                  <div className="ta-message-label">🤖 AI ANALYSIS (based on YOUR data)</div>
                  <div className="ta-message-text ta-message-pre">{currentStep.aiAnalysis}</div>
                </div>
              )}

              {currentStep.humanRefinement && (
                <div className="ta-message ta-message-human-refinement">
                  <div className="ta-message-label">👤 YOUR STRATEGIC REFINEMENT</div>
                  <div className="ta-message-text ta-message-pre">{currentStep.humanRefinement}</div>
                </div>
              )}

              {currentStep.finalOutput && (
                <div className="ta-message ta-message-deliverable">
                  <div className="ta-message-label">📦 FINAL DELIVERABLE</div>
                  <div className="ta-message-text ta-message-pre">{currentStep.finalOutput}</div>
                </div>
              )}

              {currentStep.memory && (
                <div className="ta-message ta-message-memory">
                  <div className="ta-message-label">💾 INSTITUTIONAL MEMORY</div>
                  <div className="ta-message-text ta-message-pre">{currentStep.memory}</div>
                </div>
              )}

              <div className="ta-message ta-message-output">
                <div className="ta-message-text">
                  ✓ {currentStep.output}
                </div>
              </div>
            </div>
          </div>

          {step >= 4 && (
            <div className="ta-result-card ta-result-success">
              <h3 className="ta-result-title">The Transformation</h3>
              <p className="ta-result-text">
                In the same amount of time, you have a deployment-ready strategy built on YOUR specific context, YOUR data, and YOUR expertise.
              </p>
              <p className="ta-result-conclusion">
                AI as a thought partner: You get what you need, and it gets better every time.
              </p>
              <div className="ta-result-quote">
                <p className="ta-quote-text">
                  "One is a transaction. The other is transformation."
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default ThoughtArchitectureDemo;
