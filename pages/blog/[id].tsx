import { useRouter } from "next/router"


export default function Detail() {
    const router = useRouter();
    const {id} = router?.query;
    return  <div>
        <title>First Post</title>
          <img src="/images/Jai-Vijayan.webp">
          </img>
          <p>Jai Vijayan </p>
          <p>Contributing Writer</p>
          <img src="/images/defend_Adam_Vilimek_shutterstock.webp">
          </img>
          <h1>7 Steps to Take Right Now to Prepare for Cyberattacks by Russia</h1>
          <p>US-led sanctions on Russia for its invasion of Ukraine earlier this week have sparked considerable concern about retaliatory and spillover cyberattacks from the region on US organizations and those based in other allied nations.
            Many expect the attacks to run the gamut from destructive campaigns involving the use of disk-wipers and ransomware, to distributed-denial-of-service attacks, phishing, disinformation, misinformation and influence campaigns. Security experts expect that some of the attacks will be targeted and executed by state-backed Russian threats. Others are likely going to launched by actors sympathetic to Russian interests, and yet others will likely just spill over from Ukraine and cause collateral damage in the same way that NotPetya malware did a few years ago.
            Here are seven measures that security experts say organizations need to take right now to be prepared for these attacks. Most of the advice includes measures that organizations should have in place already. But if they don't, now is a good time to implement them, say the experts.</p>
          <h2>
            1. Assess Your Exposure: Not Everyone Faces the Same Risks
          </h2>
          <p>
            Chester Wisniewski, prsincipal research scientist at Sophos, says the exposure that organizations face to Russian cyberattacks varies significantly.
            Companies that have done or are doing business in Ukraine should expect the worst and make sure that all their security controls are as up to date as possible. Monitoring for credential abuse is especially key. "You should expect communications to be unreliable and have backup plans for how to communicate via other means if you intend to continue operating during the conflict," Wisniewski says.
            The US Cybersecurity and Infrastructure Security Agency has recommended that organizations working with Ukrainian counterparts take special care to "monitor, inspect, and isolate traffic from those organizations" and to review access controls for that traffic. The advice is one in a long list of tips that CISA has assembled in a document called Shields Up.
            There's a reasonable chance of organizations that do business in the region, but not specifically Ukraine — such as Poland, Romania, Estonia, Latvia, Lithuania, or Moldova — becoming victims of collateral damage from attacks designed to impact Ukraine. Wisniewski points to indicators that Sophos observed Thursday of a disk-wiping malware tool called HermeticWiper impacting some contractor locations in Latvia and Lithuania although it was targeted at Ukrainian entities.
            "I don't expect Russia will directly target NATO members, but we saw similar fallout from the NotPetya attacks, which were intended to mostly impact Ukraine," Wisniewski says.
            Organizations with no connection to the region are at heightened risk of becoming victims of independent Russia-based threat actors looking to cause harm to the west and perceived enemies of the Russian state. "We were concerned about this outcome before the conflict began and noticed that the Conti ransomware group has come out and declared their 'full support of the Russian government,'" Wisniewski says.
          </p>
          <h2>
            2. Minimize Your Attack Surface
          </h2>
          <p>
            Organizations should validate their security posture by looking for exposed network borders/DMZ using tools such as search.censys.io and shodan.io, says Matthew Warner, CTO and co-founder at Blumira.
            It's a good idea also to deploy Sysmon within the environment, Warner says. "Sysmon can provide broad visibility across your environment that you won't get with default Windows logging. In that sense it essentially mimics what EDR is trying to do," he says. However, organizations often can get good fidelity and detections by looking into Sysmon data. "Oftentimes Sysmon detects behaviors even before an endpoint detection and response (EDR) tool will," Warner says.
            Monitor outbound traffic for signs of malware on the network calling out to a command-and-control destination. Though nation-state malware can be extremely hard to spot, in most cases the malware has to communicate somehow, BreachRX said.
            A week before the Russian invasion of Ukraine, the National Security Agency issued an advisory on the need for organizations to use strong password types to protect credentials in device configuration files on Cisco routers.
            "The rise in the number of compromises of network infrastructures in recent years is a reminder that authentication to network devices is an important consideration," NSA noted, not making any reference to Russian attacks or the current conflict in Ukraine
          </p>
          </div>
}