import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'


export const StatsData = [
    {
        icon: (<GiEarthAmerica />),
        title: "Over 100 Destinations",
        desc: "Travel to over 100 unique places"
    },
    {
        icon: (<MdAirplanemodeActive />),
        title: "1 Million Trips Made",
        desc: "Over 1 million trips completed last year"
    },
    {
        icon: (<MdTimer />),
        title: "Faster Support",
        desc: "Access our support team 24/7"
    },
    {
        icon: (<FaMoneyCheck />),
        title: "Best Deals",
        desc: "We offer the best prices"
    }
]