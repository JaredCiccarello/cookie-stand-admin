import CreateForm from '.@/components/CreateForm';
import ReportTable from '.@/components/ReportTable';
import { render } from 'react-dom';

export default function Main() {
  return (
    <div>
      <CreateForm />
      <ReportTable />
    </div>
  )
}