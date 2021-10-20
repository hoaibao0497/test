import React from 'react';
import PropTypes from 'prop-types';

TaskItem.propTypes = {
    
};

function TaskItem(props) {
    return (
        <tr className="w-full font-light text-gray-700  whitespace-no-wrap border border-b-1 ">
            <td className="px-4 py-4">1</td>
            <td className="px-4 py-4">Bedram Tamang</td>
            <td className="px-4 py-4">
                              <span className="text-sm bg-blue-500 text-white rounded-full px-2 py-1">
                                Active
                              </span>
            </td>
            <td className="px-4 py-4">
                <span className="bg-blue-200 px-6 rounded-md py-2">15h</span>
            </td>
            <td className="text-center px-3 py-4 flex gap-5">
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                    </svg>
                </button>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            </td>
        </tr>
    );
}

export default TaskItem;