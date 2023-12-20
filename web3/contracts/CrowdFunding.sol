// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign{
        address owner;
        string fullName;
        string title;
        string description;
        uint256 goal;
        uint256 raised;
        uint256 deadline;
        bool goalReached;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignsCount=0;

    function createCampaign(address owner, string memory fullName, string memory title, string memory description,
    uint256 goal, uint256 deadline, string memory image) public returns (uint256){
        Campaign storage campaign = campaigns[campaignsCount];

        require(bytes(title).length != 0, "campaign title cannot be empty");
        require(deadline > block.timestamp, "campaign deadline cannot be in the past");
        require(goal > 0, "campaign goal cannot be 0");

        campaign.owner = owner;
        campaign.fullName = fullName;
        campaign.title = title;
        campaign.description = description;
        campaign.goal = goal;
        campaign.raised = 0;
        campaign.goalReached = false;
        campaign.deadline = deadline;
        campaign.image = image;

        campaignsCount++;

        return campaignsCount - 1;
    }

    function donateToCampaign(uint256 id) public payable returns (bool){
        require(msg.value > 0, "some amount must be donated");
        Campaign storage campaign = campaigns[id];
        
        (bool success,) = payable(campaign.owner).call{value: msg.value}("");
        if (success){
            campaign.donators.push(msg.sender);
            campaign.donations.push(msg.value);
            campaign.raised = campaign.raised + msg.value;
            if (campaign.raised > campaign.goal){
                campaign.goalReached = true;
            }
        }
        return success;
    }

    function getDonations(uint256 id) view public returns (address[] memory, uint256[] memory){
        return (campaigns[id].donators, campaigns[id].donations);
    }
    
    function getCampaigns() view public returns (Campaign[] memory) {
        Campaign[] memory campaignsArray = new Campaign[](campaignsCount);
         for (uint256 i = 0; i < campaignsCount; i++) {
            campaignsArray[i] = campaigns[i];
        }

        return campaignsArray;
    }
}