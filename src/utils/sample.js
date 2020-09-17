export const getSampleData = () => {
    return [
            {
                code: "ITOT",
                name: "S&P 500 Index",
                quantity: 150,
                current_cost: 49.9,
                average_cost: 41.75,
                invested_amount: 6739.98,
                market_value: 22.06,
                market_percentage: 3,
                unrealized_pl_value: 4859.93,
                unrealized_pl_percentage: 10,
                unrealized_pl_type: 'profit',
                investment_type: 'etf'
            },
            {
                code: "ETA",
                name: "MSCI EAFE Index",
                quantity: 120,
                current_cost: 59.9,
                average_cost: 55.75,
                invested_amount: 6559.98,
                market_value: 25.06,
                market_percentage: 6,
                unrealized_pl_value: 709.93,
                unrealized_pl_percentage: 15,
                unrealized_pl_type: 'loss',
                investment_type: 'mf'
            }
        ]
}

