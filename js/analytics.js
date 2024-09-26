// İlk Script Bloku
//<![CDATA[
    window.dataLayer = window.dataLayer || [];
    //]]>
    
    // İkinci Script Bloku
    //<![CDATA[
    (function(w,d,s,l,i) {
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W8KL5Q5');
    //]]>
    
    // Dördüncü Script Bloku
    //<![CDATA[
    (function() {
        function normalizeAttributeValue(value) {
            if (value === undefined || value === null) return undefined;
    
            var normalizedValue;
    
            if (Array.isArray(value)) {
                normalizedValue = normalizedValue || value
                    .map(normalizeAttributeValue)
                    .filter(Boolean)
                    .join(', ');
            }
    
            normalizedValue = normalizedValue || value
                .toString()
                .toLowerCase()
                .trim()
                .replace(/&amp;/g, '&')
                .replace(/&#39;/g, "'")
                .replace(/\s+/g, ' ');
    
            if (normalizedValue === '') return undefined;
            return normalizedValue;
        }
    
        var pageAttributes = {
            app_name: normalizeAttributeValue('Marketplace'),
            app_env: normalizeAttributeValue('production'),
            app_version: normalizeAttributeValue('f7d288070b9f39d549844c8396eb4f0e5a6212e5'),
            page_type: normalizeAttributeValue('item'),
            page_location: window.location.href,
            page_title: document.title,
            page_referrer: document.referrer,
            ga_param: normalizeAttributeValue('_ga=2.83851542.1636576065.1726982824-980027584.1726825074'),
            event_attributes: null,
            user_attributes: {
                user_id: normalizeAttributeValue(''),
                market_user_id: normalizeAttributeValue(''),
            }
        };
        dataLayer.push(pageAttributes);
    
        dataLayer.push({
            event: 'analytics_ready',
            event_attributes: {
                event_type: 'user',
                custom_timestamp: Date.now()
            }
        });
    })();
    //]]>
    
    // Altıncı Script Bloku
    //<![CDATA[
    (function() {
        // Cookie Consent Scripts
        (function(w,d,s,l,i) {
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W8KL5Q5');
    })();
    //]]>
    
    // Yeddinci Script Bloku
    //<![CDATA[
    (function () {
        if (typeof window.datadog_attributes != 'object')
            window.datadog_attributes = {};
        window.datadog_attributes['pageType'] = 'other';
    
        // Log experiment enrolment
        var experiment_data_string = "" + "!";
        window.datadog_attributes['experiments'] = experiment_data_string;
    })();
    //]]>
    
    // Əlavə Script Blokları
    //<![CDATA[
    // Bütün digər inline script kodlarınızı buraya əlavə edin
    //]]>
    