import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../Anecdote.css'; 

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    const filter = state.filter;
    const filteredAnecdotes = state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
    const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes);
    return sortedAnecdotes;
  });

  const handleVote = (id) => {
    
      dispatch(vote(id));
    
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <TransitionGroup>
        {anecdotes.map((anecdote) => (
          <CSSTransition key={anecdote.id} timeout={500} classNames="anecdote">
            <div className="anecdote-item">
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button onClick={() => handleVote(anecdote.id)}>vote</button>
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default AnecdoteList;
