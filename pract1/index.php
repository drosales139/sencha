<?php
	include("Cabecera.html");
	?>
	<section class="div-main">
    <div id="acordeon" class="main-content">
			<h4>Conversi&#243;n de grados C a F y F a C </h4>
			<div class="content">
                <div class="input">
                    <label for="txtCelsius">Grados Celsius</label>
                    <input type="text" id="txtCelsius" placeholder="0"/>
                </div>
                <div class="input">
                    <label for="txtFahrenheit"> Grados Fahrenheit</label>
                    <input type="text" id="txtFahrenheit" placeholder="32"/>
                </div>
                
                <div class="button">
                    <input type="button" id="btnConver" value="Convertir" />
                </div>
            <table id="gradosConvertidos" >
				<thead>
					<tr>
						<td>Celisus</td>
						<td>Fahrenheit</td>
					</tr>
				</thead>
                <tbody></tbody>
			</table>
			</div>
			<h4>D&iacute;a de la semana</h4>
			<div class="content">
                <div class="input">
                <label for="txtFahrenheit">Fecha</label>
                    <input type="text" id="txtFecha" >
                </div>
                <div class="button">
                    <input type="button" id="btnFch" value="Mostrar" />
                </div>
                <table id="GwFechas">
				<thead>
					<tr>
						<td>Fecha</td>
						<td>D&#237;a</td>
                        <td>Day</td>
					</tr>
				</thead>
                <tbody></tbody>
			</table>
			</div>		 
		</div>	
     </section>
<?php
	include("Pie.php");
?>
