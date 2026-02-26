const projectStories = [
  {
    title: "Enterprise SSO & Access Governance Program",
    challenge:
      "Fragmented authentication patterns and inconsistent access controls across multiple SaaS products increased audit risk.",
    approach:
      "Designed a standardized SSO + provisioning framework using Entra ID, role mapping, and governance checkpoints for app onboarding.",
    result:
      "Established a repeatable security baseline and improved confidence in access control consistency across 10+ business-critical tools.",
  },
  {
    title: "Jira Intake and Workflow Standardization",
    challenge:
      "Unstructured intake requests created delays, rework, and visibility gaps for IT support and platform owners.",
    approach:
      "Implemented request templates, routing logic, and automation in Jira to align issue triage with service ownership.",
    result:
      "Reduced operational friction, improved handoff quality, and increased throughput predictability for incoming requests.",
  },
  {
    title: "Zoom Room Reliability & Lifecycle Management",
    challenge:
      "Room performance and ownership inconsistencies impacted user experience in a distributed workplace.",
    approach:
      "Built lifecycle standards for onboarding, configuration, monitoring, and support escalation across room assets.",
    result:
      "Improved service reliability and enabled more proactive maintenance planning at scale.",
  },
];

const timeline = document.getElementById("timeline");

projectStories.forEach((story) => {
  const article = document.createElement("article");
  article.className = "story";
  article.innerHTML = `
    <h3>${story.title}</h3>
    <p><strong>Challenge:</strong> ${story.challenge}</p>
    <p><strong>Approach:</strong> ${story.approach}</p>
    <p><strong>Result:</strong> ${story.result}</p>
  `;
  timeline.appendChild(article);
});

document.getElementById("year").textContent = new Date().getFullYear();
