// pages/Dashboard.jsx
import { useParams } from 'react-router-dom';
import PotluckyDashboard from './dashboards/PotluckyDashboard';
import PotchefDashboard from './dashboards/PotchefDashboard';
import FranchiseeDashboard from './dashboards/FranchiseeDashboard';
import AdminDashboard from './dashboards/AdminDashboard';
// import PotluckyDashboard from './dashboard/PotluckyDashboard';
// import PotchefDashboard from './dashboard/PotchefDashboard';
// import FranchiseeDashboard from './dashboard/FranchiseeDashboard';
// import AdminDashboard from './dashboard/AdminDashboard';

const Dashboard = () => {
  const { role } = useParams();
  switch (role) {
    case 'potlucky':
      return <PotluckyDashboard />;
    case 'potchef':
      return <PotchefDashboard />;
    case 'franchisee':
      return <FranchiseeDashboard />;
    case 'main-admin':
    case 'super-agent':
    case 'territorial-manager':
      return <AdminDashboard role={role} />;
    default:
      return <div>Invalid role</div>;
  }
};
 export default Dashboard;