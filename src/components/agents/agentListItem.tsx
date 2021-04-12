import React from 'react'
import { AgentProps } from 'interfaces/index'
import Image from 'next/image'
import Link from 'next/link'


const AgentListItem = ({ agent }: AgentProps) => (
    <div>
        <p>{agent.uuid}</p>
        <p>
            <Link href="/agents/[id]" as={`/agents/${agent.uuid}`}>
                <a>{agent.displayName}</a>
            </Link>
        </p>
        <Image src={agent.displayIconSmall} width={360} height={360} loading="lazy" />
    </div>
)

export default AgentListItem
