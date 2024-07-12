import {useUser} from '@clerk/clerk-react';
import FinancialRecordForm from './FinancialRecordForm';
import FinanacialRecordList from './FinanacialRecordList';

export const Dashboard = () => {
  const {user} = useUser(); //A hook from Clerk that allows you access user details

  return <div className="className">
    <h1>Welcome {user?.firstName}! Here Are Your Finances</h1>
    <FinancialRecordForm />
    <FinanacialRecordList />
  </div>
};

