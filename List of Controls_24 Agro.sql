SELECT 
      L.CONTROL,
      L.FORMULA,
      L.SQL_TEXT,
      L.PRIORITATEA,
      L.STATUT
      
      
        
        FROM

( 

SELECT 
      L.CONTROL,
      L.FORMULA,
      L.SQL_TEXT,
      L.PRIORITATEA,
      L.STATUT
      
      
        
        FROM

( 
SELECT 
      B.CONTROL,
      B.FORMULA,
      B.SQL_TEXT,
      B.PRIORITATEA,
      B.STATUT
      
      
        
        FROM CIS2.MD_CONTROL B  INNER JOIN (
        SELECT 
        A.CONTROL, 
        MAX(A.CONTROL_VERS) CONTROL_VERS
        
        FROM CIS2.MD_CONTROL A
        
        
         WHERE
         1=1
         AND A.FORM  = 33
         
         AND A.CONTROL_VERS <=:pPERIOADA 
               
         GROUP BY 
          A.CONTROL
         
         ORDER BY 
          A.CONTROL
        
        )  A  ON A.CONTROL = B.CONTROL AND A.CONTROL_VERS = B.CONTROL_VERS   
        
        
         WHERE
         1=1
         AND B.FORM  = 33
         AND B.STATUT <> '3'
         
        
        
               
         
         
         ORDER BY 
          B.CONTROL ) L
          
--          WHERE 
--          1=1
--          AND L.FORMULA LIKE '%=%'
          ) L
          
            WHERE 
--         1=1
L.CONTROL   NOT IN ('32-017','33-018','32-019','32-020','32-010','33-001','33-008','33-009',
'33-011',
'33-012',
'33-013',
'33-014',
'33-015',
'33-016'
)
--          
--         AND  L.FORMULA  NOT LIKE '%>=%'
--          AND 
--          L.FORMULA  NOT LIKE '%=>%'

ORDER BY 
 L.CONTROL