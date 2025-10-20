
import { createClient } from '../../../config/serverClient';
import { redirect } from 'next/navigation';

const UsersLayout = async ({children}) => {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session)
  if (!session) {

    redirect("/accounts/signin");
  }
  return (
    <div className='h-full overflow-hidden'>
      {children}
    </div>
  )
}

export default UsersLayout
