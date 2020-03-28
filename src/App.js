import React, {Component} from 'react';
import './App.css';
import DisplayComponent from './Components/displayComponent';
import KeypadComponent from './Components/KeypadComponent';

class App extends Component {
  constructor(){
    super();
    this.state = {
      operator: null,
      specialOperators: null,
      equation: 'click "C" to clear the screen...',
       result: 0
    }
  }

  componentDidMount(){
    document.addEventListener("click", this.onClick);
  }

  onClick=(event)=>{
    let numbers = ["0","1","2","3","4","5","6","7","8","9"]
    let key = event.target.name;
    if(key==="="){
      this.calculate(this.state.equation)  
    }

    if(numbers.includes(key)){
      event.preventDefault()
      this.handleClick(key)
    }
     else if(key==="."){
      event.preventDefault()
      this.handleDot()
    }else if(key==="C"){
      event.preventDefault()
      this.reset()
    } else if(['+','-','÷','×'].includes(key)){
      event.preventDefault()
      this.toggleOperator(key)
      //this.calculate(this.state.equation)
    } else if(['%', 'π','√','Exp', 'sin(','cos(','tan(', 'log('].includes(key)){
      event.preventDefault()
      this.handleSpecialKeys(key)
    }   
  }
  
  // UNSAFE_componentWillMount(){
  //   document.addEventListener("click", this.onClick)
  // } 

  calculate=(input)=>{
    if(input !==""){
      console.log('input fireee>>>>>>', input);
      try{
        let replace = input.toString()
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/%/g, "/100")
        .replace(/√/g, "Math.sqrt(")
        .replace(/Exp/g, "Math.exp")
        .replace(/π/g, "Math.PI")
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")
        .replace(/log\(/g, "Math.log10(")

        if(replace.includes('(')) replace += ')';
        let mathResult = eval(replace)

        if(isNaN(mathResult)){
          return;
        } else{
          this.setState({
            result: mathResult.toString()
          })
        }
      } catch(error){
        console.log('fire the error', error);
        this.setState({
          result: `Bad input`
        })
      }
    }
  };

  handleDot=()=>{
     const equation = this.state.equation;
     if(equation.indexOf(".") === -1){
       this.setState({
         equation: equation + "."
        });
     }
  };

  handleClick=(value)=>{
     if(value==="="){
       let mathResult = this.calculate(this.state.equation)
       this.setState({
         operator: null,
         equation: this.state.result,
         result: mathResult
       })
     } else if(this.state.operator !==null){
       let newEquation = this.state.equation + value
           
        // this.calculate(replace)
        this.setState({
          equation: newEquation,
          operator: null
        })
     }  
      else {
       this.setState({
         equation: this.state.equation + value
       })
     }
  } 

  handleSpecialKeys = (operate)=>{
    let newEquation = this.state.equation
    let display
    let result

    switch(operate){
      case "%":
        const currentValue = parseFloat(newEquation);

        if (currentValue === 0 || newEquation === "") return;

        const newValue = parseFloat(newEquation) / 100;

        this.setState({
          equation: (newEquation + operate).toString(),
          
          specialOperators: null
        });
        this.calculate(newValue);
        break;
      
      case "π":
         display = newEquation + operate
         result = Math.PI

        this.setState({
          equation: display,
          result: result
        })
        this.calculate(result)
        break;

      case "√":
        if(newEquation){
           display =`${operate}${newEquation}`
          result = Math.sqrt(newEquation)
        } else{
          display = `${operate}${newEquation}`
          result = ""
        }

        this.setState({
          equation: display,
          result: result
        });

        this.calculate(result)
        break;
      
      case "Exp":
        if(newEquation){
          display = `${operate}${newEquation}`
          result = Math.exp(newEquation)
        } else if(this.state.equation !== undefined){
          display = `${operate}${newEquation}`
          result= ""
        }

        this.setState({
          equation: display,
          result: result
        });

        this.calculate(result)
        break;
      
      case "sin(":
        if(newEquation){
          display= `${operate}${newEquation}`
          result = Math.sin((newEquation * Math.PI)/180)
        } else if(this.state.equation !== undefined){
          display = `${operate}${newEquation}`
          result= ""
        }

        this.setState({
          equation: display,
          result: result
        });
        this.calculate(result)
        break;

        case "cos(":
          if(newEquation){
            display= `${operate}${newEquation}`
            result = Math.cos((newEquation * Math.PI)/180)
          } else if(this.state.equation !== undefined){
            display = `${operate}${newEquation}`
            result= ""
          }
  
          this.setState({
            equation: display,
            result: result
          });
          this.calculate(result)
          break;

          case "tan(":
            if(newEquation){
              display= `${operate}${newEquation}`
              result = Math.tan((newEquation * Math.PI)/180)
            } else if(this.state.equation !== undefined){
              display = `${operate}${newEquation}`
              result= ""
            }
    
            this.setState({
              equation: display,
              result: result
            });
            this.calculate(result)
            break;

            case "log(":
              if(newEquation){
                display= `${operate}${newEquation}`
                result = Math.log10(newEquation)
              } else if(this.state.equation !== undefined){
                display = `${operate}${newEquation}`
                result= ""
              }
      
              this.setState({
                equation: display,
                result: result
              });
              this.calculate(result)
              break;

            default:
               this.setState({
                equation: newEquation ? newEquation + operate : operate,
                specialOperators: operate,
                result: null
               });

      
    }
  }




  toggleOperator=(newOperator)=>{
    const {equation, operator} = this.state;

    const prevOperator = operator
    const prevEquation = equation

    if(operator){
      if(prevOperator===newOperator){
        return;
      } else{
        let P = prevEquation.slice(0, -1)
        console.log(P)
        this.setState({
          operator: newOperator,
          equation: P + newOperator
        })
      }
    } else{
      this.setState({
        operator: newOperator,
        equation: equation + newOperator
      })
    }
  }


  reset = ()=>{
    this.setState({
      operator: null,
      specialOperators: null,
      equation: "",
      result: ""
    })
  };
    

  render(){
  return (
    <div className="container">
    <DisplayComponent
     result={this.state.result}
      equation={this.state.equation}
      operator={this.state.operator}
      specialOperators ={this.state.specialOperators}
      />
    <KeypadComponent handleKey ={this.onClick}/>
    </div>
  );
  }
  }
export default App;
