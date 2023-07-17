import SectionTitle from './SectionTitle'
import listLeft from '../arrays/listLeft'
import listRight from '../arrays/listRight'
import "../css/list.css"

function SectionList() {
    return (
        <section className="section-light py-5">
            <div className="container">
                <div className="row">
                    <SectionTitle title="What we do" />
                    <div className="col-md-6">
                        <div className='list'>
                            <ul>
                                {
                                    listLeft.map(item =>
                                        <li key={item.key}>{item.value}</li>    
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    
                    <div className='col-md-6'>
                        <div className='list'>
                            <ul>
                                {
                                    listRight.map(item =>
                                        <li key={item.key}>{item.value}</li>    
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section> 
    )
}

export default SectionList
