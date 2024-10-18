import {useUser} from '@clerk/clerk-react';
import FinancialRecordForm from './FinancialRecordForm';
import FinanacialRecordList from './FinanacialRecordList';
import "./financial-record.css"
import { Auth } from '../auth';
import { useFinancialRecords } from '../../contexts/financal-record-context';
import { useMemo } from 'react';

export const Dashboard = () => {
  const {user} = useUser(); //A hook from Clerk that allows you access user details
  const { records } = useFinancialRecords();

  const totalMothly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);

  return <div className="className">
    <div className="brand" >
      <h1>FinTrack</h1>
      <p><span className="p-border">Let's help you track your expenses</span></p>
    </div>
    <h2 className="greeting">Welcome {user?.firstName}! Here Are Your Finances</h2>
    <FinancialRecordForm />
    <div>Total Monthly income: ${totalMothly} </div>
    <FinanacialRecordList />
    <Auth />
  </div>
};

