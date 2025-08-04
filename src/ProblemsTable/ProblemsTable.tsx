import { problemSet } from '@/mockProblems/problemSet';
import Link from 'next/link';
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

type ProblemsTableProps = {

};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {

    return (
        <tbody className='text-white'>
            {problemSet.map((problem, idx) => {

                const difficultyColor = problem.difficulty === 'easy' ? 'text-green-500' : problem.difficulty === 'medium' ? 'text-yellow-500' : 'text-red-500';

                return (
                    <tr onClick={() => window.location.href = `/problems/${problem.id}`} style={{ cursor: "pointer" }} key={idx} className='border-b border-gray-700 hover:bg-gray-800 transition duration-300 ease-in-out'>
                        <td className='px-1 py-3 w-0 font-medium '>
                            {problem.isSolved ? <BsCheckCircle className='text-green-500' fontSize={18} width={18} /> : <BsCheckCircle className='text-gray-700' fontSize={18} width={18} />}
                        </td>
                        <td className='px-6 py-3 w-0 font-medium'>{problem.title}</td>
                        <td className={`px-6 py-3 w-0 font-medium ${difficultyColor}`}>{problem.difficulty}</td>
                        <td className='px-6 py-3 w-0 font-medium'>{problem.tags.join(", ")}</td>
                        <td className='px-6 py-3 w-0 font-medium'>
                            <a href={problem.id} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>View Solution</a>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}
export default ProblemsTable;