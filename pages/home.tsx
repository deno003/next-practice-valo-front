import UserIdForm from 'components/ui/Input/Input'
import React from 'react'
import { useRouter } from 'next/router';

export default function IndexPage() {
  const [riotId, setRiotId] = React.useState('');

  const router = useRouter();

  function handleSetInputUsername(riotId: string) {
    setRiotId(riotId);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //未入力の時
    if (!riotId) {
      return;
    }

    await router.push({
      pathname: "/overview",
      query: {
        riotId: riotId
      }
    })
  }

  return (
    <div>
      <h1>Valorant Find Aim Sensitivity</h1>
      <form onSubmit={handleSubmit}>
        <UserIdForm id='riotIdForm' placeholder='Enter Riot ID ( RiotID #XXXX )' handleSetInputUsername={handleSetInputUsername} />
      </form>
    </div>
  )
}