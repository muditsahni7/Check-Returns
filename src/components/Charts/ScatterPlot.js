import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


const ScatterPlot = ({ datasets, options }) => {
    return (
        <div className=''>
            <Scatter options={options} data={datasets} />
        </div>
    );
}

export default ScatterPlot