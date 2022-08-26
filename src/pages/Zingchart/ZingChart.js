import classNames from 'classnames/bind';
import styles from './ZingChart.module.scss';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const cx = classNames.bind(styles);

const Zingchart = () => {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>#zingchart</h3>
            <div className={cx('line-chart')}>
                <Line
                    type="monotone"
                    data={{
                        labels: [
                            '22:00',
                            '00:00',
                            '02:00',
                            '04:00',
                            '06:00',
                            '08:00',
                            '10:00',
                            '12:00',
                            '14:00',
                            '16:00',
                            '18:00',
                            '20:00',
                        ],
                        datasets: [
                            {
                                data: [42, 59, 80, 81, 56, 55, 40, 42, 59, 80, 60, 56],
                                fill: false,
                                borderColor: ' rgb(74, 144, 226)',
                                backgroundColor: ' rgb(74, 144, 226)',
                                label: 'Tron Vẹn Nghĩa Tình',
                            },
                            {
                                data: [34, 40, 80, 81, 56, 90, 55, 40, 80, 81, 50, 52],
                                fill: false,
                                borderColor: 'rgb(39, 189, 156)',
                                backgroundColor: 'rgb(39, 189, 156)',
                                label: 'Thương Em',
                            },
                            {
                                data: [24, 56, 55, 40, 23, 25, 26, 56, 55, 40, 11, 15],
                                fill: false,
                                borderColor: 'rgb(227, 80, 80)',
                                backgroundColor: 'rgb(227, 80, 80)',
                                label: 'Đám Cưới Nha',
                            },
                        ],
                    }}
                    height={300}
                    width={854}
                    options={{
                        title: {
                            display: false,
                            text: 'Zing chart',
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                        },
                        scales: {
                            y: {
                                max: 100,
                                min: 0,
                                ticks: {
                                    stepSize: 100,
                                },
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Zingchart;
