import React from 'react';
import Topbar from '../../components/Topbar';

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return <div>
        <Topbar isProblemsPage={true} />
    </div>
}
export default ProblemPage;