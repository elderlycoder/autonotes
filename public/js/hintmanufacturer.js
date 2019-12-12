function getModalHint(){
   let elem = document.querySelectorAll('input[name="manufacturer"]');
   //let parent = document.querySelectorAll('div[name="parent"]');
   
   elem.forEach(function (item, elem) {
      item.addEventListener('input', function (event) {
         
         let parent = this.parentElement.nextElementSibling;
         let ul = parent.firstChild;
         ul.innerHTML = '';
         
         if (this.value.length > 1) {
            let matches = arrManufacturer.filter(arrItem => arrItem.toLowerCase().startsWith(this.value));
         
            if (matches.length > 0) {
               for (let match of matches) {
                  
                  let li = document.createElement('li');
                  li.innerText = match;
                  ul.appendChild(li);

                  li.addEventListener('click', function () {
                     item.value = this.innerHTML;
                     ul.innerHTML = '';
                  })
               }
            }
         }     
      })
      
      })
   }


let arrManufacturer = ['ABA', 'Abro', 'ABS', 'ABT', 'ACDelco', 'Achim', 'ACHR', 'Activeavto', 'ADI', 'ADL',
   'Advantech', 'Advics', 'AE', 'AFA', 'Airtech', 'Airtex', 'Aisin', 'Ajusa', 'Akebono', 'Akitaka', 'Akyoto',
   'AL-KO', 'Alca', 'ALCO', 'Alkar', 'Allied Nippon', 'Allomatic', 'ALRU', 'Alto', 'AMC', 'AMD', 'Amiwa',
   'Amos', 'AMP', 'Anam', 'Anchor', 'AP Racing', 'API', 'APPlus', 'APR', 'Aragon', 'Arbori', 'Arioto', 'Arirang', 'Arnezi', 'Arteb',
   'Arvin Meritor', 'Arvin Tech', 'Asam', 'Asco', 'Ashika', 'Asimco', 'Asin', 
   'ASP', 'Asparts', 'Asso', 'Asuki', 'Asva', 'ATD', 'ATE', 'ATEK', 'Athena', 'Atiho', 'ATL', 'Atlant', 'Atlas', 'Auger',
   'AutoBacs', 'Autoblade', 'Autocraft', 'Autofamily', 'Autoklacson', 'Autolite', 'Automann', 'Automotor France', 'Autoplus',
   'Autowelt', 'AVA', 'Avantech', 'Avtodriver', 'Axut', 'AYD', 'Ayfar', 'Aywiparts', 'Aztec', 'Adriauto', 'Airline', 'Alfa Car', 'Alhutech', 'Alisson', 'Alon', 'Andtech', 'Arnott', 'Aspoeck', 'Au-lite', 'Auradia', 'Autlog', 'Autoclover', 'Autom', 'Autotechteile', 'Autostandart', 'Aydinsan',
   'B+K', 'B-Ring', 'B-Tech', 'Bachmann', 'Baldwin', 'Bando', 'Bar', 'Bardahl', 'Barum', 'BasBug',
   'BAT-PARTS', 'BAW', 'BBT', 'BENDIX', 'BERAL', 'BERGA', 'BERGER', 'BERKUT', 'BERU', 'BESF1TS',
   'BF', 'BF GOODRICH', 'BGA', 'BIANCI', 'BIG FILTER', 'BILIGHT', 'BILSTEIN', 'BIOLIGHT', 'BLITZ',
   'BLUE PRINT', 'BLUMAQ', 'BM', 'BMW', 'BODY', 'BOGE', 'BORG HICO', 'BORGWARNER', 'BOSAL', 'BOSCH',
   'BAT', 'BOSMA', 'BPW', 'BRECK', 'BRECKNER', 'BREMAX', 'BREMBO', 'BREMI', 'BRIDGESTONE', 'BRODIT',
   'BRP', 'BSK', 'BT', 'BUGATTI', 'BUGUS', 'BVP', 'BYD', 'BEARMACH', 'BEGEL', 'BENEFIT', 'BENTLEY',
   'BERGKRAFT', 'BLACKTECH', 'BOHANG', 'BOREMAN', 'BOUGICORD', 'CADIC', 'CAFFARO', 'CAM2', 'CAMKO', 'CAMPAR AUTOPARTS', 'CAP', 'CAR-DEX',
   'CARDONE', 'CARGO', 'CARLSON', 'CARMATE', 'Case IH', 'CASTROL', 'CATERPILLAR', 'CDX', 'CEI', 'CELEN',
   'CENTRAL', 'CERADEX', 'CF', 'CHAMPION', 'CHASE', 'CHASSIS PRO', 'CHEVRON', 'CHIKO', 'CHK', 'CHONGI',
   'CIBIE', 'CIFAM', 'CITY PARTS', 'CLAAS', 'CLEAN FILTER', 'CLEAN PLUS', 'CLEVITE', 'CLOYES', 'COFAP',
   'COFLE', 'COJALI', 'COLAERT', 'COMLINE', 'COMMA', 'COMPLEX', 'CONCORD', 'CONSTRUCT', 'CONTIBELT',
   'CONTINENTAL', 'CONTITECH', 'CORTECO', 'COSMOS', 'COSPEL', 'COVIND', 'CRAFT', 'CRC', 'CROWN', 'CS',
   'CSY', 'CTC', 'CTI', 'CTP', 'CTR', 'CUMMINS', 'CWORKS', 'CXM', 'CYCLO', 'CAMOZZI', 'CANOTOMOTIV',
   'CARRIER', 'CARTECHNIC', 'CARVILLE RACING', 'CHERY', 'CHRYSLER', 'CITROEN/PEUGEOT', 'CLIMAIR',
   'CLIPPER', 'COMPACT', 'CONTIS', 'CONVIT', 'COSIBO', 'CRYOMAX', 'DAF', 'DAFMI', 'DANA', 'DANBLOCK',
   'DASHI', 'DASIS', 'DAYCO', 'DCEC', 'DEA', 'DEFA', 'DELCO REMY', 'DELLO', 'DELPHI', 'DELTA',
   'Delta Autotechnik', 'DENSO', 'DEPO',
   'DETA', 'DEUTZ', 'DIAMOND', 'DID', 'DIEDERICHS', 'DIESEL TECHNIC', 'DINEX', 'DIRECT PARTS', 'DLZ', 'DMC',
   'DOCURO', 'DOKA', 'DOLZ', 'DOMINANT', 'DON', 'DOOWON', 'DORMAN', 'DPH', 'DRIVESTAR', 'DTW PREMIUM',
   'DUNLOP', 'DWB', 'DWP', 'DAEWOO', 'DAIHATSU', 'DETROIT DIESEL', 'DEXTRIM', 'DHOLLANDIA', 'DODA',
   'DOMAR', 'DONALDSON', 'DONGIL', 'DOOHAP', 'DOUBLE FORCE', 'EAGLE EYES', 'EAI', 'EBERSPAECHER', 'EBS', 'ECCB', 'ECO', 'EDGE', 'EGR', 'EGT', 'EHUAEIBACH', 'EIKO', 'EKER', 'EKSAN', 'ELASTOGRAN', 'ELCAR', 'ELEMENT', 'ELF', 'ELPARTS', 'ELRING', 'ELWIS ROYAL', 'EMEK', 'EMPI', 'ENEOS', 'ENERGIZER', 'ENSBI', 'EPS (FACET)', 'ERA', 'ERGON',
   'ERICHJAEGER', 'ERISTIC', 'ERNST', 'ERT', 'ESSO', 'ETG', 'EUROCODE', 'EUROFLEX', 'EUROREPAR', 'EURORICAMBI', 'EVO-BUS', 'EXEDY',
   'EXIDE', 'EYQUEM', 'EKOFIL', 'EMMERRE', 'ERMAX', 'ERREVI', 'EUROCLUTCH', 'EUROPART', 'EXIT', 'EXOVO',
   'FACOM', 'FAD', 'FAE', 'FAG', 'FAI', 'FAMKO', 'FAST TIGER', 'FEBEST', 'FEBI• FEITUO', 'FEL-PRO',
   'FENGHUA', 'FENNO', 'FENOM• FENOX', 'FERODO', 'FGA', 'FIAAM', 'FILTER AG', 'FILTER MASTER', 'FILTRON', 'FINORD', 'FINWHALE', 'FISCHER',
   'FIT', 'FIXAR• FLAG', 'FLAMMA', 'FLENNOR', 'FOBOS', 'FOERSH', 'FOMAR ROULUNDS', 'FORCE', 'FORCETECH',
   'FORMPART', 'FORTECH', 'FORTUS', 'FOTON', 'FOUR SEASONS', 'FP-DIESEL', 'FRAM', 'FRANCECAR', 'FRECCIA', 'FREEZ',
   'FREIGHTLINER', 'FREMAX', 'FRENKIT', 'FRICTION MASTER', 'FRIGAIR', 'FRITEC', 'FRITECH', 'FROSCH',
   'FTE', 'FULDA', 'FULLER', 'FZBH', 'FERSA', 'FIAT', 'FIBRE TECH', 'FLEETGUARD', 'FORD', 'FORMULA 1',
   'FRANZ SAUER', 'FREN MARKET', 'FRENOTRUCK', 'FRICO', 'FRISTOM', 'G-ENERGY', 'G-BRAKE', 'G.U.D', 'GABRIEL', 'GALFER', 'GAMMA DIESEL', 'GARRETT', 'GARTEC', 
   'GATES', 'GAZ', 'GBS', 'GEBE', 'GECKO', 'GEN-TECH', 'GENERAL ELECTRIC', 'GENERAL RICAMBI', 
   'GENNOR', 'GERI', 'GF+', 'GIEFFE', 'GIGANT', 'GIRLING', 'GISLAVED', 'GK', 'GKN', 'GLASER', 
   'GLO', 'GLOBAL', 'GLYCO', 'GLYSANTIN', 'GMB', 'GMD', 'GMP', 'GOETZE', 'GOLD ROTOR', 'GOMMA', 
   'GOODWILL', 'GOODYEAR', 'GORDON', 'GOTO', 'GPD', 'GPARTS', 'GR', 'GRAF', 'GRASS', 'GREEN FILTER', 
   'GREENCOOL', 'GSP', 'GTR', 'GUNES', 'GARNET', 'GAZPROMNEFT', 'GEELY', 'GENERAL MOTORS', 'GOLDEN', 
   'GRAMMER', 'GRAND PRIX', 'GRANTEX', 'GREAT WALL', 'GUFU PARTS', 'H&Q', 'H+B ELPARTS', 'H+B JAKOPARTS',
   'HAFT', 'HAGEN', 'HANDSFREE', 'HANGIL', 'HANS PRIES', 'HAZET', 'HCC', 'HD-PARTS', 'HDE', 'HDK',
   'HEBEL KRAFT', 'HEIWA', 'HEJALUX', 'HELLA', 'HENGST', 'HEPAFIX', 'HEPU', 'HERZOG', 'HEYNER',
   'HI-DRIVE', 'HI-GEAR', 'HI-TEC', 'HICO', 'HIGER', 'HITACHI', 'HK', 'HKT', 'HNTC', 'HOBI', 'HOFFER',
   'HOFMANN POWER WEIGHT', 'HOLA', 'HOLSET', 'HOT RODS', 'HOWE', 'HSB', 'HSC', 'HTP', 'HUCO', 'HUDSON',
   'HUTCHINSON', 'HAACON', 'HACO', 'HALDEX', 'HANLIN', 'HANKOOK FRIXA', 'HANSE WERKZEUG', 'HENGDA',
   'HIGHWAY', 'HINO', 'HONDA', 'HORPOL', 'HUBBER', 'HUSKY LINERS', 'HUSSAR', 'HYBSZ', 'HYUNDAI/KIA',
   'HYVA', 'I.C.T.', 'ICER', 'IDEMITSU', 'IFHS', 'IHI', 'IKA', 'IKARUS', 'ILJIN', 'IMPERGOM', 'IMS',
   'INA', 'INNO', 'INTERBRAKES', 'INTERFEDER', 'INTERMOTOR', 'INTERNATIONAL', 'INTERVALVES', 'IPD',
   'IRB', 'ISA-RACING', 'ISAM SPA', 'ISKRA', 'ISKY', 'IWIS', 'IBERIS', 'INGERSOLL RAND', 'ISUZU',
   'IVECO', 'J+P GROUP', 'JAHN', 'JANMOR', 'JAPAN CARS', 'JAPANPARTS', 'JCB', 'JD', 'JEAN ALBERT', 'JFBK', 'JIKIU', 'JNBK', 'JOHN DEERE', 'JOST', 'JPN', 'JS ASAKASHI', 'JTC TOOLS CO., LTD',
   'JUNSITE', 'JURID', 'JUST', 'JWP', 'JAGUAR', 'JET-GO', 'JMANY', 'JOHN-GUEST', 'JURATEK', 'K&K', 'K&W', 'K+F', 'K2', 'KACO', 'KAMAZ',
   'KANCA', 'KAP', 'KASHIYAMA', 'KASSBOHRER', 'KAVO PARTS', 'KAYABA', 'KCW', 'KENT',
   'KEYSTONE', 'KFZ', 'KIBI', 'KILEN', 'KING', 'KING TONY', 'KITTO', 'KIXX', 'KKK', 'KLAKSON',
   'KLAXCAR FRANCE', 'KLEBER', 'KLEVER', 'KLOKKERHOLM', 'KM AUTO TECHNIK', 'KM BRAKES', 'KNORR BREMSE',
   'KO CHOU', 'KOGEL', 'KOITO', 'KOIVUNEN OY', 'KOMATSU', 'KONGSBERG', 'KONSTEIN', 'KORTEX', 'KOS', 'KOYO', 'KP', 'KRAFTTECH', 'KRAMME',
   'KRAUF', 'KRML', 'KRONE', 'KRONER', 'KROSS', 'KS', 'KTM', 'KUDO', 'KUJIWA', 'KUMHO', 'KVEST', 'KW', 
   'KYK', 'KYOSAN', 'KAWE B.V.', 'KACMAZLAR', 'KAHVECI OTOMOTIV', 'KINLON (МОТОТЕХНИКА)', 'KURTSAN', 
   'KYOUNG DONG', 'LADA', 'LAGO', 'LASO', 'LAZER', 'LEART', 'LEMA', 'LEMFOERDER', 'LESJOFORS', 'LESTER', 
   'LGR', 'LIBAO', 'LIEBHERR', 'LIFAN', 'LINEX', 'LIP', 'LIPE', 'LIQUI MOLY', 'LIQUI MOLY RUS', 'LLC', 
   'LLE', 'LOHR', 'LONGHO', 'LOVELLS', 'LP', 'LPR/AP', 'LUBERFINER', 'LUCAS', 'LUCASEE', 'LUK', 'LUMAG', 
   'LUZAR', 'LYNXAUTO', 'LAMIRO', 'LAND ROVER', 'LEADER PLUS', 'LITTELFUSE', 'LUXE', 'MAFF', 
   'MAGNETI MARELLI', 'MAHLE', 'MAHLE IZUMI', 'MAINE COON', 'MAJORSELL', 'MAN', 'MANDO', 'MANN-FILTER', 
   'MANN_JP', 'MASTER', 'MASTER POWER', 'MASUMA', 'MAYLE', 'MAZ', 'MAZ-MAN', 'MBB', 'MECAFILTER', 'MECARM', 
   'MEDEO', 'MEI', 'MELETT', 'MERA', 'METAL WORKS', 'METALCAUCHO', 'METALGOM', 'METELLI', 'MEX', 'MEYER', 
   'MEYLE', 'MFILTER', 'MGK', 'MH', 'MHI', 'MIBA', 'MICHELIN', 'MICRO', 'MINTEX', 'MITSUBOSHI', 'MIYACO', 
   'MK-FILTER', 'MOBIL', 'MOBIL-ESSO', 'MOBILETRON', 'MONARK', 'MONROE', 'MOOG', 'MOPAR', 'MOPISAN', 
   'MORATTI', 'MOTGUM', 'MOTO-SZLIF', 'MOTODOR', 'MOTORAD', 'MOTORCRAFT', 'MOTUL', 'MOUNTAIN', 'MRK', 
   'MRU', 'MSG', 'MTF', 'MTP', 'MTX', 'MUSASHI', 'MV-PARTS', 'MVI', 'MY CARR', 'MALO (AKRON)', 'MANNOL', 
   'MANSONS', 'MAPCO', 'MARKON', 'MARS', 'MARSHALL', 'MATAB', 'MAXEEN', 'MAXTRAC', 'MAY', 'MAZDA', 
   'MCGARD', 'MEAT & DORIA', 'MEGA', 'MEGUIN', 'MENBERS', 'MENSCH', 'MERCEDES', 'MERITOR', 'MITSUBISHI', 
   'MONT BLANC', 'MOTOR PRO', 'MOTORHERZ', 'MULTIPART', 'MULTITRUCK', 'MURATO', 'NAC', 'NACHI', 'NAGARES', 
   'NAKAMOTO', 'NARVA', 'NDC', 'NE', 'NEOLUX', 'NEW HOLLAND', 'NEWSTAR', 'NEWSUN', 'NGK/NTK', 'NGN', 'NHK', 
   'NIERMANN', 'NIPPARTS', 'NIPPON', 'NISSENS', 'NISSHINBO', 'NITTO', 'NK', 'NKN', 'NLZ', 'NOK', 'NOKIAN', 
   'NORDEN', 'NORDFIL', 'NORMA', 'NORPLAST', 'NPA', 'NPW', 'NRF', 'NSK', 'NSO', 'NSP', 'NT', 'NTN-SNR', 
   'NURAL', 'NATIONAL', 'NEOPLAN', 'NIBK', 'NIPPON PIECES', 'NISSAN', 'NOKIAN TYRES', 'NOMIS', 'NORD GLASS', 
   'OBK', 'OCAP', 'ODM', 'OE GERMANY', 'OJD-QUICK BRAKE', 'OMAR', 'OMCAR', 'ONNURI', 'ONYARBI', 'OPTIBELT', 
   'OPTIMAL', 'ORIG', 'OSRAM', 'OSSCA', 'OSVAT', 'OSWALD', 'OLDI', 'OLYMP', 'OREX', 'ORJIN AUTOMOTIVE', 
   'P.B.R SPROCKETS S.R.L', 'PATRON', 'PAYEN', 'PC', 'PE', 'PEKO', 'PERSEA', 'PEX', 'PHC', 'PHILIPS', 
   'PHIRA', 'PHOENIX', 'PIAA', 'PIERBURG', 'PILENGA', 'PIMAX', 'PINGO', 'PIONIR FILTERS', 'PJ', 'PMC', 
   'POLCAR', 'POLMOSTROW', 'POMAX', 'POWERTECH', 'PRASCO', 'PRIME-RIDE', 'PRO-TEC', 'PROFI-CAR', 
   'PROFIT', 'PROKOM', 'PROMO LINE', 'PROVIA', 'PUDENZ', 'PURFLUX', 'PUROLATOR', 'PANDORA', 'PARLOK', 
   'PEGA', 'PERKINS', 'PILKINGTON', 'PODAROK', 'PORSCHE', 'POWERMAX', 'PRECISION', 'PRIMATECH', 
   'PRO PARTS', 'PYUNG HWA', 'QAS', 'QSTEN', 'QTC', 'QUARTZ', 'QUATTRO FRENI', 'QUICK BRAKE', 
   'QUINTON HAZELL', 'RANCHO', 'RAPRO', 'RAYBESTOS', 'RBH', 'RBI', 'RC', 'RECORD FRANCE', 'RED', 
   'REIN', 'REMAN', 'REMSA', 'REMY CHEMICALS', 'REPARTS', 'REPLICA', 'RESTIN', 'RIB-TOP', 'RIK', 'RINCO', 
   'RIVAL', 'RIXOS', 'ROAD HOUSE', 'ROBUSTO', 'ROCKY', 'ROLFO', 'ROLLTEC', 'ROMIX', 'ROR', 'ROSTAR', 
   'ROTA', 'RTS', 'RUEI', 'RUSEFF', 'RUTEN', 'RUVILLE', 'RYWAL', 'RACOR', 'RAON', 'RAUFOSS', 'RAUMERK', 
   'REALDUN', 'REIKANEN', 'REKLAMA', 'RENAULT', 'RENAULT-SAMSUNG', 'RIXENBERG', 'ROS&B', 'ROADWIN', 
   'ROCKINGER', 'RODRUNNER', 'ROERS PARTS', 'ROLCAR', 'ROLLING', 'ROLLS ROYCE', 'ROVER', 'ROWE', 'RUBBOLITE', 'RUEN', 'S&K GMBH', 'S.B.S.', 'SABO', 'SACHS', 'SAEMOTO', 'SAF', 
   'SAFETY', 'SAHIN', 'SAKURA', 'SALER', 'SAMPA', 'SANCHEZ-LAFUENTE', 'SANGSIN', 'SANWA', 
   'SARDES', 'SASIC', 'SASSONE', 'SAT', 'SATA', 'SAUER', 'SBK', 'SCAN-TECH', 'SCENSA', 'SCHMITZ', 
   'SCHNIEDER', 'SCHWITZER', 'SCT', 'SE-M LASTIK', 'SEAL', 'SEBRO', 'SEIKEN', 'SEINSA', 'SEIWA', 
   'SENSEN', 'SEPAR', 'SERTPLAS', 'SETRA', 'SFEC', 'SH', 'SHEFT', 'SHELL', 'SHERIFF', 'SHIBATO', 
   'SHIMAHIDE', 'SHINKO', 'SHOWA', 'SIDAT', 'SIDEM', 'SIEGEL AUTOMOTIVE', 'SIFFERT', 'SIL', 'SIM', 
   'SISMAK', 'SIVENTO', 'SKF', 'SKV', 'SLP', 'SNG', 'SOGEFI', 'SOLIDO', 'SOREA', 'SPARTECH', 
   'SPECTRA PREMIUM', 'SPICER', 'SPIDAN', 'ST', 'STABILUS', 'STANADYNE', 'STARKE', 'STARLINE', 
   'STARMANN', 'STARTVOLT', 'STEINERHOFF', 'STELLOX', 'STESA', 'STONE', 'STP', 'STRON', 'SUMICO', 'SUN', 
   'SUN IMPEX', 'SUPLEX', 'SURE FILTER', 'SWAG', 'SWF', 'SAMPIYON', 'SCANIA', 'SCHNEIDER ELECTRIC', 
   'SCHOMAECKER', 'SEALED POWER', 'SEKURIT', 'SENSOR', 'SERTPAST', 'SIRIT', 'SMART BRAKE', 'SOGEFIPRO', 
   'SONDER', 'SORL', 'SRUMTO', 'SSANGYONG', 'STANDARD', 'STARKMEISTER', 'STEEL MATE - PARKTRONICS', 
   'SUBARU', 'SUNRISE', 'SUZUKI', 'T&T', 'T7 SK ENCAR', 'TAGAZ', 'TAIHO', 'TAKOMA', 'TALOSA', 'TAMA', 
   'TAMMERS', 'TANAKI', 'TATRA', 'TCIC', 'TDC', 'TE PARTS', 'TEBOIL', 'TECHMAN', 'TECHNO TEILE', 'TECNECO', 
   'TECNOFLEX', 'TEIKIN', 'TEKNOROT', 'TEMPLIN', 'TENACITY', 'TERMAL', 'TEROSON', 'TESLA', 'TESLA TECHNICS', 'TEXA', 'TEXTAR', 'THERMO KING', 'THG', 'THO', 'THULE', 
   'TIK', 'TIMKEN', 'TIMMEN', 'TIXONA', 'TKE', 'TKY', 'TMV', 'TOKAI', 'TOKICO', 'TOMCO', 'TOMSUN', 'TON', 
   'TONG YANG', 'TOPCOOL', 'TORCH', 'TORQUE', 'TORR','TOTACHI', 'TOTAL', 'TOTEM', 'TOYO', 'TOYOGUARD', 
   'TPR', 'TRANSPO', 'TRANSTAR', 'TRC-TURBO', 'TRIALLI', 'TRICO', 'TRP', 'TRUCKMAN', 'TRUSTING', 'TRW', 
   'TRW ENGINE', 'TSK', 'TSN', 'TTT', 'TUDOR', 'TURKAS', 'TYC', 
   'TYG', 'TZK', 'TAS', 'TANGDE', 'TECAR', 'TECHNOBRAKE', 'TEXACO', 'TIGER PARTS', 
   'TOPFILS', 'TORK', 'TOTAL SOURCE', 'TOYOTA', 'TRAILER PARTS', 'TRUCKEXPERT', 'TRUCKPLAST', 
   'TRUCKTEC AUTOMOTIVE', 'TRUCKTECHNIC', 'TUNGSRAM', 'TURTLE WAX', 'TZERLI', 'U-BOLT', 'UAZ', 'UBS', 'UC', 'UCEL', 'UFI', 
   'UKORAUTO', 'ULO', 'UNIBRAKE', 'UNICORN', 'UNION', 'UNIPOINT', 'UNITED MOTORS', 'URW', 'US MOTOR WORKS', 
   'USAG', 'USMER', 'UTM', 'UXCLENT', 'UYGUR', 'VAG', 'VALEO', 'VAN WEZEL', 'VARTA', 'VDO', 'VECTOR', 
   'VEGE', 'VEMO/VAICO', 'VERNET', 'VEROPA', 'VESTION', 'VIALLE', 'VIC', 'VICTOR REINZ', 'VIEROL', 'VIEW MAX', 
   'VIGNAL', 'VIKA', 'VIZIT-AUTO', 'VK TECHNOLOGY', 'VM', 'VOITH', 'VOREL', 'VPM', 'VSP', 'VADEN', 
   'VANSTAR', 'VENEPORTE', 'VERTEX', 'VINGURU', 'VOLVO', 'WABCO', 'WAECO', 'WAGNER', 'WAHLER', 'WAI', 
   'WALKER', 'WAS', 'WAT', 'WEATHERTECH', 'WEBASTO', 'WEBURG', 'WEEN', 'WELLS', 'WINJET', 'WINMAX', 
   'WP', 'WESTFALIA', 'WEWELER', 'WIND TRADING SRL', 'WINKLER', 'WINNARD', 'WOSMANN', 'WURTH', 'WYNNS', 'X2', 'XINYA', 'XXL', 
   'XYG', 'XENITE', 'YAC', 'YADA', 'YAMAHA', 'YAMAMOTO', 'YATO', 'YENMAK', 'YES-Q', 'YES-Q CERAMIC', 
   'YIH SHENG', 'YOKOHAMA', 'YUIL', 'YONGBANG', 'YUEJIN', 'YUMAK', 'YURTSAN', 'ZEM', 'ZEN', 'ZETEX', 'ZETRA', 'ZEXEL', 'ZF', 
   'ZIC', 'ZIMMERMANN', 'ZIPOWER', 'ZM', 'ZZVF', 'ZEPRO', 'ZIKOP', 'E-MARK', 'LIQUID', 'WD-40', 'АВС-ДИЗАЙН', 'АВТОБРОНЯ', 'АВТОУПОР', 'АКСЕМОТОРС', 'КАМА', 'ЛУКОЙЛ', 
   'МЕГА', 'ПААЗ', 'ПЛАКАТЫ', 'СОЮЗ-96', 'ТОЧКА ОПОРЫ', 'ТРИО'
   ]