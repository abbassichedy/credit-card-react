import React from 'react'
import './Credit.css'

class Credit extends React.Component {
    constructor() {
      super();
      this.state = {
        name :'',
        number:'',
        year:'',
        
    }
    }
     namechange=(e)=>{
        let regex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        if(regex.test(e.target.value))
        { this.setState({ name:e.target.value .toUpperCase()});}
     }
     numberchange=(e)=>{
        // ((e.target.value.slice(0,4)).concat((e.target.slice(4,8))),((e.target.value.slice(8,12)).concat((e.target.value.slice(12,16)))))
         let regex=/^[0-9]*$/
        if(regex.test(e.target.value))
         this.setState({number:e.target.value });
     }
     
     yearchange=(e)=>{
         let reg=/^[0-9]*$/
        if( reg.test(e.target.value))
         this.setState({year:e.target.value});
     }
     moischange=(x)=>{
        let mois=String(x)
        // let mois=x.toString()
        console.log(mois.slice(0,1))
        console.log(mois.slice(0,2))
        if((mois.slice(0,1)>1)||(mois.slice(0,2)>12)){return "error"}
        
        return mois.slice(0,2) +"/"+ mois.slice(2)

     }
     
    
        
        render() {
    return (
        <div className="credit-carte">
        <div className="credit">
            <div className="credit-sup">
            <p >CAMPANY CART
                
            </p>
            < img src="https://s4i6r5r7.stackpathcdn.com/wp/wp-content/themes/simoptions/assets/img/sim-card-bg-min.png"/>
            <span>
                {this.state.number.split(/(\d{4})/).join(' ').trim().padEnd(20, '*')}
            </span>
            </div>
            <div className="credit-inf">
                <p>
                 {this.moischange(this.state.year.padEnd(4, '*'))}
                </p>
                <img className="mastercart" src="https://i.pinimg.com/originals/28/99/08/289908a6bb2d5f2ab846f0606e72e0fe.png"/>
            </div>
            <a className="foulen">
            {this.state.name}
            </a>

        </div>
       <div className="formulaire">
       <input placeholder="Card Number" maxLength="16" value={this.state.number} onChange={this.numberchange}/>
       <input placeholder="month / year" maxLength="4" value={this.state.year} onChange={this.yearchange}/>
       <input placeholder="name"maxLength="20" value={this.state.name} onChange={this.namechange}/>

       </div>
       
       
        </div>
    )
        }
    }
    export default Credit