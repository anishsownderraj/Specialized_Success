import React from 'react';



class Card extends React.Component {
    state = {score: 0, curr_index: 0, questions:[
        {
			question: 'What level of education have you completed?',
			answers: [
				{ answerText: 'Did not complete high school'},
				{ answerText: 'High school'},
				{ answerText: 'Currently in college'},
				{ answerText: "Bachelor's degree"},
                { answerText: 'Masters degree'},
				{ answerText: 'Doctorate'},

			],
		},

		{
			question: 'Have you had an internship?',
			answers: [
				{ answerText: 'No'},
				{ answerText: 'Yes'},

			],
		},

		{
			question: 'Are you a Computer Science major?',
			answers: [
				{ answerText: 'No'},
				{ answerText: 'Yes'},
			],
		},

		{
			question: 'How experienced are you in coding?',
			answers: [
				{ answerText: 'No knowledge'},
				{ answerText: 'Know 1 language'},
				{ answerText: 'Know 2 languages'},
				{ answerText: 'Know 3+ languages'},
			],
		},
        {
			question: 'How confident do you feel in Front-end Development? (1=Low, 5=High)',
			answers: [
				{ answerText: '1'},
				{ answerText: '2'},
				{ answerText: '3'},
				{ answerText: '4'},
                { answerText: '5'},
			],
		},
        {
			question: 'How confident do you feel in Back-end Development? (1=Low, 5=High)',
			answers: [
				{ answerText: '1'},
				{ answerText: '2'},
				{ answerText: '3'},
				{ answerText: '4'},
                { answerText: '5'},
			],
		},
        {
			question: 'How confident do you feel in Computer Architecture? (1=Low, 5=High)',
			answers: [
				{ answerText: '1'},
				{ answerText: '2'},
				{ answerText: '3'},
				{ answerText: '4'},
                { answerText: '5'},
			],
		},
        {
			question: 'How confident do you feel in Computer Graphics? (1=Low, 5=High)',
			answers: [
				{ answerText: '1'},
				{ answerText: '2'},
				{ answerText: '3'},
				{ answerText: '4'},
                { answerText: '5'},
			],
		},
        {
			question: 'How confident do you feel in Artificial Intelligence? (1=Low, 5=High)',
			answers: [
				{ answerText: '1'},
				{ answerText: '2'},
				{ answerText: '3'},
				{ answerText: '4'},
                { answerText: '5'},
			],
		},
	]
}
changeCard = (index) => {
    // Shows each card
    // console.log(index)
    if(this.state.curr_index + 1 != 9){
        this.setState({score: this.state.score + index, curr_index: this.state.curr_index + 1})
    }
    else {
        if(this.state.score <=11){
            this.props.onResult(0)
        } else if(this.state.score <=18){
            this.props.onResult(1)
        } else {
            // console.log("HI")
            this.props.onResult(2)
        }

        this.props.navigate('results')
    }
    // Shows result page
}

    render(){
        return(
            <div className='app'>
                {/* <div className='title-style' style={{padding:'5px',background:'#73AD21',borderRadius:'25px',position: 'absolute',top:'100px',left:'8px'}}>Let's get a better knowledge about your software engineering experince</div> */}
                <div className='question-section'>
						<div className='question-count'>
							<span>Question {this.state.curr_index + 1}</span>/{9}
						</div>
						<div className='question-text'>{this.state.questions[this.state.curr_index].question}</div>
					</div>
					<div className='answer-section'>
						{this.state.questions[this.state.curr_index].answers.map((text, index) => <button key={index} onClick={()=>this.changeCard(index)}>{text.answerText}</button>)}
					</div>
            </div>
        );
    }



}

export default Card;