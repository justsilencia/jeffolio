import React, { Component } from 'react';
import Rating from 'react-rating'
import { faGrinStars, faSadTear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import timeElapsed from '../components/utils/timeElapsed';
import Scrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";

class Feedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            feedback: [],
            rating: 0,
            who: '',
            critique: '',
            showThanks: false
        }

        this.formRef = React.createRef();
        this.setRating = this.setRating.bind(this);
        this.setWho = this.setWho.bind(this);
        this.setCritique = this.setCritique.bind(this);
        this.submitRating = this.submitRating.bind(this);
        this.populateFeedback = this.populateFeedback.bind(this);
        this.killThanks = this.killThanks.bind(this);
    }

    killThanks() {
        this.setState({showThanks: false});
    }

    setRating(rating) {
        this.setState({rating: rating});
    }

    setWho(e) {
        this.setState({who: e.target.value});
    }

    setCritique(e) {
        this.setState({critique: e.target.value});
    }

    componentDidMount() {
        this.populateFeedback();
    }

    populateFeedback() {
        fetch('https://jeffolio.herokuapp.com/getfeedback', {
                    method: 'GET',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    }
            })
            .then(res => res.json())
            .then(feedback => {
                this.setState({feedback: feedback});
            });
    }

    submitRating(e) {
        e.preventDefault();
        this.formRef.current.reportValidity();
        const isValid = this.formRef.current.checkValidity();
        if (isValid) {
            if (this.state.rating !== 0) {
                fetch('https://jeffolio.herokuapp.com/postfeedback', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        who: this.state.who,
                        comment: this.state.critique,
                        rating: this.state.rating
                    })
                })
                .then(res =>  res.json())
                .then(feedback => {
                    this.setState({feedback: feedback, who: '', critique: '', rating: 0, showThanks: true});
                });
            } else {
                alert("Don't forget to leave a rating!");
            }
        }
    }

    render() {

        const renderFeedback = this.state.feedback.map((item, i) => {
            return (
                <div key={i} className="feedback-item mb-5">
                    <div className="feedback-head">
                        { item.who } -
                        { timeElapsed(item.entrydate, " Posted") }
                    </div>
                    <div className="feedback-body">
                        { item.comment }
                        <div className="rating-body">
                            Rating: <span>{ item.rank }</span>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className="col-lg-12 mt-5 feedback-wrapper">
                {
                    <div onAnimationEnd={this.killThanks} 
                    className={this.state.showThanks?"thanks":"display-none"}>Thanks!</div>
                }
                <h1>What did you think?</h1>
                <strong>Your rating: </strong>
                <span className="rating">{this.state.rating}</span>  
                <form ref={this.formRef}>
                <div className="mb-1">
                    <input
                      required
                      value={this.state.who}
                      onChange={this.setWho}
                      onFocus={(e) => e.target.placeholder = ""}
                      onBlur={(e) => e.target.placeholder = "Who are you?"}
                      placeholder="Who are you?"
                      type="text"
                      className="feedback-input" />
                </div>
                <div>
                    <textarea
                      required
                      value={this.state.critique}
                      onChange={this.setCritique}
                      onFocus={(e) => e.target.placeholder = ""}
                      onBlur={(e) => e.target.placeholder = "Embrace your inner critique!"}
                      placeholder="Embrace your inner critique!" 
                      maxLength="1000" />
                </div>
                <div>
                    <Rating 
                        emptySymbol={<FontAwesomeIcon icon={faSadTear} size="2x" />}
                        fullSymbol={<FontAwesomeIcon icon={faGrinStars} size="2x" />}
                        initialRating={this.state.rating} 
                        onChange={this.setRating} 
                    />
                </div>
                <div className="mt-2">
                    <button onClick={(e) => this.submitRating(e)} className="btn btn-secondary">Post Feedback!</button>
                </div>
                </form>
                <div className="mt-2 feedback-contain">
                    <Scrollbar>
                    <div className="feedback-card">
                        <div>
                        { renderFeedback? renderFeedback : 'No feedback yet..'}
                        </div>
                    </div>
                    </Scrollbar>
                </div>
            </div>
        );
    }
}

export default Feedback;