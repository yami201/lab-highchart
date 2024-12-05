import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_more from 'highcharts/highcharts-more';

HC_more(Highcharts);


const Chart = ({options}) => {
    return ( 
        <HighchartsReact highcharts={Highcharts} options={options} />
     );
}
 
export default Chart;