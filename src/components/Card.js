import React from 'react';

class Card extends React.Component {
    state = {curr_index: 0, questions:[
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
	]
}
// Sets card to diff question
changeCard = (e) => {
    this.setState({curr_index: this.state.curr_index + 1})
}

    render(){
        return(
            <div className='app'>
                <div className='title-style' style={{padding:'5px',background:'#73AD21',borderRadius:'25px',position: 'absolute',top:'100px',left:'8px'}}>Let's get a better knowledge about your software engineering experince</div>
                <div className='question-section'>
						<div className='question-count'>
							<span>Question {this.state.curr_index + 1}</span>/{4}
						</div>
						<div className='question-text'>{this.state.questions[this.state.curr_index].question}</div>
					</div>
					<div className='answer-section'>
						{this.state.questions[this.state.curr_index].answers.map((text) => <button onClick={()=>this.changeCard()}>{text.answerText}</button>)}
					</div>
            </div>
        );
    }



}

export default Card;