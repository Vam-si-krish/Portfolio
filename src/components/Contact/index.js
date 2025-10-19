import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import './index.scss';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'ai', text: "Hello! I'm an AI assistant trained on Vamsi's resume. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatWindowRef = useRef(null);

    // --- SYSTEM PROMPT BASED ON RESUME ---
    const systemPrompt = `
You are an AI assistant representing Vamsi Krishna Chiguruwada, a professional Front-end Engineer. Your knowledge base is strictly limited to the information in this resume. Answer questions concisely and professionally, as if you are Vamsi, but make it clear you are an AI persona.

**Vamsi Krishna Chiguruwada's Resume:**

**Summary:**
- 5+ years of experience as a Front-end Engineer in FinTech and Healthcare.
- Specializes in data-heavy, real-time web applications using React, Next.js, and TypeScript.
- Proficient with GraphQL, WebSockets, and AG Grid.
- Strong focus on accessibility (WCAG), role-based access control, and testing.
- Holds a Meta Front-End Developer Professional Certificate and is U.S. work authorized.
- Currently located in Boston, MA.

**Skills:**
- **Core Frontend & Frameworks:** React, JavaScript (ES6+), TypeScript, HTML, Next.js (SSR/SSG/ISR), CSS.
- **State Management:** Redux, Recoil, React Context API.
- **Styling & UI Libraries:** Tailwind CSS, Bootstrap, Material UI, Responsive Web Design, SASS/LESS.
- **Backend & Data Handling:** RESTful APIs, GraphQL, WebSockets, Node.js, Postman, Swagger, OAuth2, JWT.
- **Development Workflow & Tools:** Jest, Test Driven Development, Accessibility (WCAG, ARIA), NPM, Webpack, Agile, JIRA, GitHub, Git, AI Integrations, Figma, React Profiler, Lighthouse.

**Experience:**
1.  **Yash Technologies | Front-End Web Developer (Sep 2022 - Aug 2024)**
    - Client: Merck Group (Germany)
    - Project: Sustainable Business Value (SBV) Dashboard in Healthcare/Compliance.
    - Built a company-wide dashboard with React, TypeScript, and Next.js for leadership to monitor KPIs.
    - Implemented role-based access control (RBAC) and audit trails for GDPR compliance.
    - Improved client-side performance, cutting data fetching time by 30%.

2.  **Msys Technologies | Frontend Developer (Feb 2021 - Aug 2022)**
    - Client: Intercontinental Exchange (ICE)
    - Project: Bakkt crypto exchange.
    - Built the core front-end for the crypto exchange using React and TypeScript.
    - Integrated real-time market data via WebSockets, reducing UI latency by 30%.
    - Co-designed API contracts and implemented request batching.

3.  **Msys Technologies | Frontend Developer Intern (Feb 2020 - Jan 2021)**
    - Built high-performance real-time market tables with AG Grid.
    - Translated Figma designs into responsive web interfaces.

**Education:**
- **Hult International Business School (Aug 2024 - Jul 2025):** Master of Science (M.S.), Business Analytics (STEM Designated).
- **Audisankara College of Engineering and Technology (Jul 2016 - Aug 2020):** Bachelor of Technology (B.Tech.), Computer Science and Engineering.

**Contact Information:**
- Email: vamsi@vamsikrish.com
- Phone: +1 339-242-3758
- LinkedIn: linkedin.com/in/vamsi-krish-c
- GitHub: github.com/vam-si-krish
- Website: vamsikrish.com
`;

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        // const userInput = input;
        setInput('');
        setIsLoading(true);

        const chatHistoryForAPI = newMessages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        try {
            const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

            const payload = {
                contents: chatHistoryForAPI,
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                }
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error.message || 'API request failed');
            }

            const result = await response.json();
            const aiResponseText = result.candidates?.[0]?.content?.parts?.[0]?.text;

            if (aiResponseText) {
                setMessages(prev => [...prev, { sender: 'ai', text: aiResponseText }]);
            } else {
                setMessages(prev => [...prev, { sender: 'ai', text: "Sorry, I couldn't generate a response. Please try again." }]);
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            setMessages(prev => [...prev, { sender: 'ai', text: `An error occurred: ${error.message}` }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const quickQuestionHandler = (question) => {
        setInput(question);
        // This makes it easy for the user to send the question
    }


    return (
        <>
            <div className="chat-fab" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faComments} />
            </div>

            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h2>Vamsi's AI Assistant</h2>
                        <p>Ask me about his resume!</p>
                    </div>
                    <div className="chat-body" ref={chatWindowRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message ai">
                                <Loader type="ball-pulse" />
                            </div>
                        )}
                    </div>
                     <div className="quick-questions">
                        <button onClick={() => quickQuestionHandler("What are your skills?")}>Skills</button>
                        <button onClick={() => quickQuestionHandler("Summarize your experience")}>Experience</button>
                        <button onClick={() => quickQuestionHandler("What is your education?")}>Education</button>
                    </div>
                    <div className="chat-footer">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                                disabled={isLoading}
                            />
                            <button type="submit" disabled={isLoading}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;

