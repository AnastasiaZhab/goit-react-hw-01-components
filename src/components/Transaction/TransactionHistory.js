import PropTypes from "prop-types";
import s from './TransactionHistory.module.css'

const TransactionHistory = ({transactions}) => {
    return (
        <table className={s.table}>
            <thead className={s.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({type, amount, currency, id}, index) => {
                    return (
                <tr key={id} style={{background: index % 2 === 0 ?'#eee' : '#fff'}}>
                            <td style={{verticalAlign: 'inherit'}}>{ type}</td>
                            <td>{ amount}</td>
                            <td>{ currency}</td>
                </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,

    }
    ))
}

export default TransactionHistory;