import React from 'react';
import './RuleRow.scss';

function RuleRow({ doScore, name, score, description, rolling }) {
  const disabled = score !== undefined || rolling;

  return (
    <tr
      className={`RuleRow RuleRow-${disabled ? 'disabled' : 'active'}`}
      onClick={disabled ? null : doScore}
    >
      <td className='RuleRow-name'>{name}</td>
      <td className='RuleRow-score'>{disabled ? score : description}</td>
    </tr>
  );
}

export default RuleRow;
