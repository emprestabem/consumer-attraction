import Container from '../../common/container'
import styled from 'styled-components'
import {AreaChart, XAxis, CartesianGrid, YAxis, Area, ResponsiveContainer, Tooltip} from 'recharts'

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
const InstallmentValue = ({className}) => (
  <section className={className}>
    <Container>
      <h2>Calculadora de Juros</h2>
      <div className="holder">
        <div className="column">
          <label>
      Valor do empréstimo
            <input type="text" />
          </label>
          <label>
      taxa de juros (%)
            <input type="number" />
          </label>
          <label>
      prazo (em meses)
            <input type="number" />
          </label>
        </div>
        <div className="column">
          <table className="result">
            <tbody>
              <tr className="highlight">
                <td>Taxa de juros</td>
                <td>17,0%</td>
              </tr>
              <tr>
                <td>Valor total pago</td>
                <td>R$ 12.998,12</td>
              </tr>
              <tr>
                <td>Valor pago em juros</td>
                <td>R$ 2.998,12</td>
              </tr>
            </tbody>
          </table>
          <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}
                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
          </AreaChart>
        </ResponsiveContainer>
        </div>
      </div>
    </Container>
  </section>
)

export default styled(InstallmentValue)`
  label,input,select {
    display: block;
    line-height: 2rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .holder {
    display: flex;
  }
  .column {
    flex-grow: 1;
  }
  .result{
    td {
      line-height: 2rem;
    }
    td:nth-child(odd) {
      text-align: left;
    }
    td:nth-child(even) {
      text-align: right;
    }
  }
  .highlight {
    font-size: 1.2rem;
    font-weight: 400;
  }

`
