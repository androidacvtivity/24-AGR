



        SELECT 
        
            CUIIO,
            COUNT (*) AS CNT 
        
        
        FROM CIS2.VW_DATA_ALL
        
        WHERE 
        
        FORM = 33
        AND PERIOADA = 1052 
        
        GROUP BY 
        CUIIO
        
        ORDER BY 
        COUNT (*) DESC