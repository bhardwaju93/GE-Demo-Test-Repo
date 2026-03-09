sequenceDiagram
    autonumber
    participant CE as Chaos Engineer
    participant Node as Nokia SR-14s Node
    participant NMS as Network Monitoring
    participant Agent as Gemini AI Agent
    participant Jira as Atlassian Jira
    
    CE->>Node: Inject Thermal Fault (Overheat)
    Note over Node: Temp exceeds 85°C threshold
    Node-->>NMS: Critical Thermal Alarm
    Node--xNMS: Connection Lost (System Shutdown)
    
    NMS->>Agent: Webhook: Node Offline
    Agent->>Jira: POST /rest/api/2/issue
    Jira-->>Agent: Returns Ticket ID (SCRUM-5)
    
    Agent->>CE: "CRITICAL: Node failed. Jira issue SCRUM-5 created."
