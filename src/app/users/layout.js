
import { supabase } from '../../../config/supabaseClient'
import { redirect } from 'next/navigation';

const UsersLayout = async ({children}) => {

  const {
    data: { session },
  } = await supabase.auth.getSession();

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
