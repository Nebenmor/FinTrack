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
    <h1>Welcome {user?.firstName}! Here Are Your Finances</h1>
    <FinancialRecordForm />
    <div>Total Monthly: ${totalMothly} </div>
    <FinanacialRecordList />
    <Auth />
  </div>
};

