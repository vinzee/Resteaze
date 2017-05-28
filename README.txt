Resteaze - Advanced Ambulatory Measures of Leg Movements Including Periodic Leg Movements During Sleep
------------------------------------------------------------------------------
Richard Allen (JHU), Nilanjan Banerjee (co-PI), Ryan Robucci, Chintan Patel
Technology Development Corporation (Maryland Innovations Initiative) 
------------------------------------------------------------------------------
https://www.csee.umbc.edu/~nilanb/sponsors.html
http://tejasbhalerao.com/sid/resteaze.html
------------------------------------------------------------------------------
I believe this figdata file has all the necessary information to construct the graph in the pdf. In that file, there are three vectors: restlessness, plm and sleep position. These are all the same length (numIntervals) and each element represents the same time interval (Interval Size = 1 minute in this case). Also included is the start of recording time (iso8601) and sleep start and stop (in minutes since start of recording).

The restlessness vector ranges from 0 (restful) to 3 (restless). The plm marking vector contains "plm/minute" - I have to ask Tony what the "many-few" PLM scale corresponds to. I'm sure you can arbitrarily pick a scale for now and I'll clear it up with Tony. Finally, here are the codes for the sleep position vector: <1> left side, <2> supine, <3> right side, <4> prone. 

​This data should be sufficient to reconstruct the graph Tony made. If anything is not clear please email or call me and I should be able to provide more information.
------------------------------------------------------------------------------

Periodic Limb Movement - PLM