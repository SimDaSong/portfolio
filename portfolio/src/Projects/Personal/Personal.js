import React from 'react';
import './Personal.css';
import FourBitCPU from './4-bit-cpu.png';
import BendingMachine from './bending-machine.png';
import ComputerArchitectureHelper from './computer-architecture-helper.png';
import ResourceMonitor from './computer-resource-monitor.png';
import ProcessTree from './process-tree.png';
import CLI from './cli.png';

const Personal = () => {
    return (
        <div className="personal">
            <h2>개인 프로젝트</h2>

            <div className="personal-wrap">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SimDaSong/4-bit-cpu">
                <div className="card">
                        <div className="image" style={{backgroundImage: `url(${ FourBitCPU })`}}></div>
                    <p>4-bit CPU</p>
                </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SimDaSong/bending-machine">
                    <div className="card">
                        <div className="image" style={{backgroundImage: `url(${ BendingMachine })`}}></div>
                        <p>자판기</p>
                    </div>
                </a>
                <div className="card">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/SimDaSong/computer-architecture-helper">
                        <div className="image" style={{backgroundImage: `url(${ ComputerArchitectureHelper })`}}></div>
                        <p>컴퓨터구조 학습도우미</p>
                    </a>
                </div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SimDaSong/simple-resource-monitor">
                    <div className="card">
                        <div className="image" style={{backgroundImage: `url(${ ResourceMonitor })`}}></div>
                        <p>Simple Resource Monitor</p>
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SimDaSong/process-tree">
                    <div className="card">
                        <div className="image" style={{backgroundImage: `url(${ ProcessTree })`}}></div>
                        <p>Process Tree</p>
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SimDaSong/cli">
                    <div className="card">
                        <div className="image" style={{backgroundImage: `url(${ CLI })`}}></div>
                        <p>CLI</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Personal;