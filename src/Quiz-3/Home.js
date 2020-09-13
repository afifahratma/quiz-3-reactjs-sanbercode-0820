import axios from 'axios'
import React,{ Component} from 'react'
import './public/css/style.css'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            movie:null
        }
    }
    componentDidMount(){
        if(this.state.movie === null){
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                this.setState({movie: res.data.map(el  =>  {
                    return{
                        id: el.id,
                        title: el.title,
                        description: el.description,
                        year: el.year,
                        duration: el.duration,
                        genre: el.genre,
                        rating: el.rating,
                        image_url: el.image_url
                    }
                })
            })
            }
            )
        }

    }

    render(){
        return(
            <div>
                <h1>Daftar Film Terbaik</h1>

                {this.state.movie !== null && 
                this.state.movie.map(el =>{
                    return(
                        <div id="article-list">
                            <div className="article">
                            <h4 style={{textAlign:'left'}}>{el.title}</h4>
                                <img src={el.image_url} alt="poster" style={{width: '25%', textAlign: 'left'}}/>
                                <h3>Rating {el.rating}</h3>
                                <h3>Tahun rilis {el.year}</h3>
                                <h3>Durasi: {el.duration} menit</h3>
                                <h3>Genre: {el.genre}</h3>
                                <p>
                                    <strong>deskripsi: </strong>
                                    {el.description}
                                </p>
                            </div>
                        </div>
                    )
                })}

            <footer>
            <h5>copyright © 2020 by Sanbercode</h5>
             </footer>
            </div>
        )
    }
}

export default Home