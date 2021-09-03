		function processa_dia(day,month,year){

    	//referência: 01/01/2017 - Domingo => para resto 0 (d-1);
    
    	//referência ano bissexto: 2016 => 16;
    
    	//Alguns comandos comentados são linhas de código para teste da função.

        if (year%4==0)
        {
    
        var extra = 1;
        }else{
    
        extra = 0;
        }
    
        //vetor que referencia a conclusão do mês anterior---------------------------
    
        var mesref = new Array(0,31,(28+extra),31,30,31,30,31,31,30,31,30);
    
        //posição 0 = mês 1 (m-1);
    
        //---------------------------------------------------------------------------
    
        var primeiro_resultado=365*(year-2017) + parseInt((year-2017)/4);
    
        var segundo_resultado = 0;
    
        for(var cont=0; cont<=(month-1); cont++)
    
        {
    
        segundo_resultado = segundo_resultado+mesref[cont];
    
        }
    
        return (day+primeiro_resultado+segundo_resultado); 
    
    	}

		function carrega(){

    	var data = new Date();
    
    	//document.write(data.getHours()+":"+data.getMinutes()+":"+data.getSeconds());
    
    	var dia = data.getDate();
    
    	var mes = 1+data.getMonth(); //0--11; m+1.

    	var ano = data.getFullYear();

    	var resultado_final = processa_dia(dia,mes,ano);
    
    	var rest=(resultado_final-1)%7;
    
    	var nomedia = new Array("Domingo","Segunda feira","Terça feira","Quarta feira","Quinta feira","Sexta feira","Sábado");
    
    	var hora = data.getHours();
    
    	var conversao = hora*60+data.getMinutes();
    
    	//document.write(primeiro_resultado);
    
    	//document.write(segundo_resultado);

		//document.write(nomedia[rest]);
    
    	document.write("Você acessou o endereço "+window.location.href+" a(s) "+hora+" hora(s) e "+data.getMinutes()+" minuto(s) de "+nomedia[rest]+" - "+dia+"/"+mes+"/"+ano+".");
    	}
