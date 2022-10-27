// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.13;

  contract WhatIsTheAtmosphereInOurClass {
    bool public isHappy;
    bool public isNeutral;
    bool public isSad;

    uint256 public happy;
    uint256 public neutral;
    uint256 public sad;

    function IsHappy() public {
        happy ++;

        if(happy<sad || happy< neutral){
            isHappy = false;
        } else if(happy>sad && happy>neutral){
            isHappy = true;
        }
    }

    function IsSad() public {
        sad ++;

        if(sad<happy || sad< neutral){
            isSad = false;
        } else if(sad>happy && sad>neutral){
            isSad = true;
        }
    }

    function IsNeutral() public {
        neutral ++;

        if(neutral<sad || neutral< happy){
            isNeutral = false;
        } else if(neutral>sad && neutral>happy){
            isNeutral = true;
        }
    }

    function viewVote() public view returns(uint256,uint256,uint256){
        return (happy,sad,neutral);
    }

    function checkResult() public view returns(bool,bool,bool){
        return (isHappy,isSad,isNeutral);
    }

  }